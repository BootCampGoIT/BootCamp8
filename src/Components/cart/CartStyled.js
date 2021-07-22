import styled from "styled-components";

export const CartStyled = styled.div`
  .totalCount {
    border-top: 3px solid ${(props) => props.colors.main};
    padding: 10px 0;
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.colors.main};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
