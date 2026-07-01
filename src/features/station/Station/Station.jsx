import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Spacer } from "../../../App.styles";
import {
  MapCard,
  StationListCard,
  Title,
  StationWarp,
  Wrap,
  StationCard,
  DistanceGroup,
  DistanceButton,
  Pagination,
  PageButton,
  NextButton,
  StationContnet,
} from "../styles/Station.styles";
import MapApi from "../MapApi/MapApi";

const DISTANCES = [1, 5, 10, 20];

const Map = () => {
  const [distance, setDistance] = useState(DISTANCES[0]);
  const [page, setPage] = useState(0);
  const [stations, setStations] = useState([]);
  const [coords, setCoords] = useState({ lat: 37.5665, lng: 126.978 });
  const [pages, setPages] = useState({ size: 3, boardCounts: 0 });
  const [focus, setFocus] = useState(null);

  useEffect(() => {
    // 브라우저에서 제공하는 API 사용자의 현재 위치를 1회성으로 조회하는 함수
    // 요청 실패시 useState에 적힌 기본 위도 경도로 이동
    // 1회성 조회라 자동 갱신은 못함
    // 이동갱신하려면 getCurrentPosition => watchPosition 으로 변경해야함
    // 충전소 조회라 1회성으로 만 갱신함
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => console.log("위치 조회 실패", err),
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost/api/chargeStations", {
          params: {
            page: page + 1,
            lat: coords.lat,
            lng: coords.lng,
            dist: distance,
          },
        });
        setStations(res.data.data.stations);
        setPages(res.data.data.pageInfo);
        // console.log(res.data.data.stations);
      } catch (e) {
        console.log("조회 실패", e);
      }
    };

    fetchData();
  }, [distance, page, coords]);

  const totalPages = Math.ceil(pages.boardCounts / pages.size);

  const positions = useMemo(
    () =>
      stations.map((s) => ({
        title: s.stationName,
        lat: s.lat,
        lng: s.lng,
      })),
    [stations],
  );

  return (
    <Spacer>
      <Wrap>
        <Title>전기차 충전소 조회</Title>
        <StationWarp>
          <StationListCard>
            <DistanceGroup>
              {DISTANCES.map((d) => (
                <DistanceButton
                  key={d}
                  data-active={d === distance}
                  onClick={() => {
                    setDistance(d);
                    setPage(0);
                  }}
                >
                  {d}km
                </DistanceButton>
              ))}
            </DistanceGroup>

            {stations.map((s) => (
              <StationCard
                key={s.stationNo}
                onClick={() => setFocus({ lat: s.lat, lng: s.lng })}
              >
                <StationContnet data-type="title">
                  {s.stationName}
                </StationContnet>
                <StationContnet data-type="point">
                  지역 : {s.region}
                </StationContnet>
                <StationContnet>주소 : {s.address}</StationContnet>
                <StationContnet data-type="charger">
                  충전기 {s.chargerCount}대 이용가능
                </StationContnet>
              </StationCard>
            ))}
            <Pagination>
              <NextButton>이전</NextButton>
              {Array.from({ length: totalPages }).map((_, p) => (
                <PageButton
                  key={p}
                  data-active={p === page}
                  onClick={() => setPage(p)}
                >
                  {p + 1}
                </PageButton>
              ))}
              <NextButton>다음</NextButton>
            </Pagination>
          </StationListCard>
          <MapCard>
            <MapApi center={coords} focus={focus} positions={positions} />
          </MapCard>
        </StationWarp>
      </Wrap>
    </Spacer>
  );
};

export default Map;
