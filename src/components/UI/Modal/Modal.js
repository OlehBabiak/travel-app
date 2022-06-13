import { Fragment } from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import ModalOverlay from "./ModalOverlay";

const portalEl = document.getElementById("overlays");

const Modal = ({ onCloseModal, price }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay
            price={price}
            closeModal={onCloseModal} />,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
