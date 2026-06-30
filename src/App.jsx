import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import { ErrMsg, Spacer, ErrSpace } from "./App.styles";
import Footer from "./components/layout/Footer/Footer";
import Main from "./components/pages/Main/Main";
import Board from "./features/boards/board/Board";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chargeStations" element={<Spacer />} />
        <Route path="/guide" element={<Spacer />} />
        <Route path="/notices" element={<Spacer />} />
        <Route path="/boards" element={<Board />} />
        <Route path="/ranks" element={<Spacer />} />
        <Route path="/*" element={<ErrPage />} />
      </Routes>
      <Footer />
    </>
  );
};

const ErrPage = () => {
  return (
    <ErrSpace>
      <ErrMsg>없는 페이지 입니다.</ErrMsg>
    </ErrSpace>
  );
};

export default App;
