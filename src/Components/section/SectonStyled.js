import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-top: 20px;
  border-bottom: 4px solid ${({ colors }) => colors.main};
  padding-bottom: 20px;
  .sectionTitle {
    color: ${({ colors }) => colors.main};
    
  }
`;
