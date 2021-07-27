import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-top: 20px;

  padding-bottom: 20px;
  .sectionTitle {
    color: ${({ colors }) => colors.main};
    border-bottom: 2px solid ${({ colors }) => colors.main};
  }
`;
