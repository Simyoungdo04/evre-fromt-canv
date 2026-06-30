import { useState } from "react";
import {
  Wrap,
  Header,
  Title,
  WriteButton,
  Table,
  HeadRow,
  Row,
  Cell,
  TypeBadge,
  Pagination,
  PageButton,
} from "../styles/Board.styles";
import { Spacer } from "../../../App.styles";

const posts = [
  {
    no: 10,
    type: "notice",
    title: "게시판 이용 안내",
    author: "관리자",
    date: "2026-06-20",
    views: 152,
  },
  {
    no: 9,
    type: "notice",
    title: "공지 공지",
    author: "관리자",
    date: "2026-06-18",
    views: 98,
  },
  {
    no: 8,
    type: "general",
    title: "user01이 글을 씀2222",
    author: "user01",
    date: "2026-06-15",
    views: 41,
  },
  {
    no: 7,
    type: "general",
    title: "user01이 글을 씀",
    author: "user01",
    date: "2026-06-14",
    views: 67,
  },
  {
    no: 6,
    type: "general",
    title: "삼겹살 먹고 싶다",
    author: "두리",
    date: "2026-06-13",
    views: 33,
  },
  {
    no: 5,
    type: "general",
    title: "뭉치 돼지임ㅋ",
    author: "아토",
    date: "2026-06-12",
    views: 58,
  },
  {
    no: 4,
    type: "general",
    title: "나는 뭉치",
    author: "mungchi",
    date: "2026-06-11",
    views: 22,
  },
  {
    no: 3,
    type: "general",
    title: "나는 아토",
    author: "ato",
    date: "2026-06-10",
    views: 14,
  },
  {
    no: 2,
    type: "general",
    title: "나는 두리",
    author: "doori",
    date: "2026-06-09",
    views: 76,
  },
  {
    no: 1,
    type: "general",
    title: "내가 첫번째 글이다",
    author: "user01",
    date: "2026-06-08",
    views: 5,
  },
];

const totalPages = 5;

const Board = () => {
  const [page, setPage] = useState(1);

  return (
    <Spacer>
      <Wrap>
        <Header>
          <Title>게시판</Title>
          <WriteButton>게시글 작성하기</WriteButton>
        </Header>

        <Table>
          <HeadRow>
            <Cell>번호</Cell>
            <Cell>유형</Cell>
            <Cell>제목</Cell>
            <Cell>작성자</Cell>
            <Cell>작성일</Cell>
            <Cell>조회수</Cell>
          </HeadRow>

          {posts.map((post) => (
            <Row key={post.no}>
              <Cell>{post.no}</Cell>
              <Cell>
                <TypeBadge data-notice={post.type === "notice"}>
                  {post.type === "notice" ? "공지" : "일반"}
                </TypeBadge>
              </Cell>
              <Cell>{post.title}</Cell>
              <Cell>{post.author}</Cell>
              <Cell>{post.date}</Cell>
              <Cell>{post.views}</Cell>
            </Row>
          ))}
        </Table>

        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <PageButton
              key={num}
              data-active={num === page}
              onClick={() => setPage(num)}
            >
              {num}
            </PageButton>
          ))}
        </Pagination>
      </Wrap>
    </Spacer>
  );
};

export default Board;
