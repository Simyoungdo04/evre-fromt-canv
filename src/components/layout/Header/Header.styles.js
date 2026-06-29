import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  background: ${Theme.color.headerBg};
  border-bottom: 1px solid ${Theme.color.border};
`;

export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: ${Theme.color.point};
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const NavLink = styled.p`
  font-size: 15px;
  color: ${Theme.color.headerText};
  cursor: pointer;
  &:hover {
    color: ${Theme.color.point};
  }
`;

export const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
