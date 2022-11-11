import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import style from "./modal.module.css";

const modalRootElement = document.querySelector("#modal");

const Modal = (props) => {
  const { marker } = props;

  const element = useMemo(() => {
    const element = document.createElement("div");
    element.dataset.marker = marker;
    return element;
  }, [marker]);

  useEffect(() => {
    modalRootElement.appendChild(element);
    return () => {
      modalRootElement.removeChild(element);
    };
  });
  return createPortal(
    <div className={style.modal__background}>
      <div className={style.modal__card}>{props.children}</div>
    </div>,
    element
  );
};

export default Modal;
