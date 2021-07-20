import styled from "styled-components";

export const StyledListItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }

  .navigationItemAnchor {
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ colors }) => colors.main};
    font-size: 24px;
  }
`;
