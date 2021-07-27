import styled from "styled-components";

export const ProductFormStyled = styled.div`
  .productForm {
    display: flex;
    flex-direction: column;
  }

  .productLabel {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
  .productInput,
  .productSelect {
    border: 1px solid #819ff5;
    height: 30px;
    border-radius: 14px;
    padding-left: 10px;
    margin: 5px 0;
    font-size: 14px;
    outline: none;
    &:hover {
      border: 2px solid #5f73a1;
      cursor: pointer;
    }
  }
  .productArea {
    outline: none;
    border: 1px solid #819ff5;
    border-radius: 14px;
    padding: 10px;
  }
  .advFormLabelCheckBox {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
  }
  .advFormCheckBox {
    margin-left: 10px;
    cursor: pointer;
  }
  .productButton {
    width: 150px;
    background-color: #819ff5;
    height: 30px;
    border: none;
    border-radius: 14px;
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    &:hover {
      background-color: #5f73a1;
      cursor: pointer;
      transition: 300ms;
    }
  }
`;
