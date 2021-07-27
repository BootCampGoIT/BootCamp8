import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 60px;
  background-color: ${({ colors }) => colors.primary};
  border-bottom: 2px solid ${({ colors }) => colors.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  .headerLogo {
    color: ${({ colors }) => colors.main};
  }
  .headerIcon {
    width: 40px;
    height: 40px;
    fill: #819ff5;
    &:hover {
      fill: #5f73a1;
      cursor: pointer;
    }
  }
`;
