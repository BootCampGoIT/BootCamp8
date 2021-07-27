import styled from "styled-components";

export const ProductsListItemStyled = styled.li`
  padding: 10px;
  flex-basis: 100%;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid ${({ colors }) => colors.primary}; */
  -webkit-box-shadow: 6px 6px 39px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 39px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 39px -6px rgba(0, 0, 0, 0.75);
  &:not(:first-child) {
    margin-top: 10px;
  }

  .productTitle {
    text-align: center;
  }
  .productImage {
    width: 100px;
    margin-top: 20px;
  }
  .productDescription {
  }

  .productPrice {
    flex-grow: 1;
    align-self: flex-start;
    margin-top: 10px;
  }
  .optionButtons {
    display: flex;
    width: 100%;
  }

  .optionButtons button {
    width: 50%;
    height: 30px;
    text-transform: uppercase;
    border: none;
    /* background-color: ; */
  }

  .optionButtons button:hover {
    background-color: ${({ colors }) => colors.active};
  }

  .addButton {
    margin-right: 1px;
    border-radius: 14px 0 0 14px;
    transition: 300ms;
    font-size: 14px;
  }

  .detailsButton {
    transition: 300ms;
    border-radius: 0 14px 14px 0;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
    margin-left: 10px;
    height: 350px;
    transition: all 200ms linear;
    &:hover {
      transform: scale(1.01);
    }

    .productListItem {
      margin-top: 10px;
    }
  }
  @media screen and (min-width: 1024px) {
    flex-basis: calc((100% - 40px) / 4);
    margin-left: 10px;
    height: 650px;
    margin-top: 10px;
  }
`;
