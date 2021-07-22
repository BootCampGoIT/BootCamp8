import styled from "styled-components";

export const CartItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  &:last-child {
    margin-bottom: 10px;
  }

  .options {
    display: flex;
    align-items: center;
  }

  .options button {
    border: 1px solid ${(props) => props.colors.main};
    border-radius: 6px;
    outline: none;
    background-color: inherit;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.colors.main};
  }

  .cartItemTitle {
    flex-grow: 1;
  }

  .cartItemPrice {
    font-weight: 700;
    margin-right: 20px;
  }

  .buttonIcon {
    fill: currentColor;
    width: 20px;
    height: 20px;
  }

  .cartItemQuantity {
    margin: 0 10px;
    font-weight: 700;
    width: 20px;
    text-align: center;
  }

  .options button:last-child {
    margin-left: 10px;
  }

  .options button:hover {
    border: 1px solid ${(props) => props.colors.active};
    color: ${(props) => props.colors.active};
    cursor: pointer;
    transform: scale(1.1);
    transition: 300ms;
    
  }
`;
