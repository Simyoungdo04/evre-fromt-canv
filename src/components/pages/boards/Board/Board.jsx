import { Spacer } from "../../../../App.styles";
import { LoginBtn } from "../../../common/Button/Button.styles";
import { ListRow, SidePanel, ListCard } from "../styles/Board.styles";

const Board = () => {
  return (
    <>
      <Spacer>
        <ListRow>
          <SidePanel />
          <ListCard />
          <LoginBtn>게시글 작성</LoginBtn>
          <SidePanel />
        </ListRow>
      </Spacer>
    </>
  );
};

export default Board;
