import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
// import sprite from "../../icons/profile/profile.svg";
import Overlay from "./ModalStyled";

const Modal = ({ children, hideModal, isOpen }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEsc = (e) => {
    if (e.code === "Escape") {
      hideModal();
    }
  };
  const onHandleClick = () => {
    hideModal();
  };

  const handleBackdropClick = (e) => {
    if (e.target.dataset) {
      if (e.target.nodeName === "DIV" && e.target.dataset.zone === "overlay") {
        hideModal();
      }
    }
  };

  return (
    <Overlay onClick={handleBackdropClick} data-zone='overlay'>
      <CSSTransition
        in={isOpen}
        appear={true}
        timeout={300}
        classNames='modal'
        unmountOnExit>
        <div className='Modal'>
          {children}
          <button className='modalBtn' onClick={onHandleClick} type='button'>
            {/* <svg className='modalIcon' width='24px' height='24px'>
              <use href={sprite + "#icon-cross"} />
            </svg> */}
          </button>
        </div>
      </CSSTransition>
    </Overlay>
  );
};

export default Modal;
