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
`;
