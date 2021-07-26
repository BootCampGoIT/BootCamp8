import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1200;
  overflow: auto;

  .Modal {
    position: relative;
    background-color: lightgray;
    /* max-width: calc(100vw - 40px);
    min-width: calc(100vw - 40px);
    max-height: calc(100vh - 40px); */
    border-radius: 14px;
    overflow: hidden;
  }

  .modalIcon {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* ================ animations =========== */

  .modal-appear {
    opacity: 0;
    transform: scale(0.8);
  }
  .modal-appear-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modal-exit {
    opacity: 1;
    transform: scale(1);
  }
  .modal-exit-active {
    opacity: 0;
    transform: scale(0.8);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (min-width: 768px) {
    .Modal {
      /* max-width: calc(100vw - 40px);
      max-height: calc(100vh - 40px);
      min-width: calc(100vw - 280px); */
    }
  }
  @media (min-width: 1024px) {
    .Modal {
      /* min-width: calc(100vw - 1000px); */
    }
  }
`;
export default Overlay;
