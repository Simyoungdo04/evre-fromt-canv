import styled from "styled-components";
import { Theme } from "../../../styles/theme";

// 배경 색 없음
export const LoginBtn = styled.button`
  padding: 8px 16px;
  border-radius: ${Theme.radius.sm};
  border: 1px solid ${Theme.color.point};
  background: transparent;
  color: ${Theme.color.point};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: ${Theme.color.pointSoft};
  }
`;

// 배경색 있음
export const SignupBtn = styled.button`
  padding: 8px 16px;
  border-radius: ${Theme.radius.sm};
  border: none;
  background: ${Theme.color.point};
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: ${Theme.color.pointHover};
  }

  &:active {
    background: ${Theme.color.pointDark};
  }
`;
