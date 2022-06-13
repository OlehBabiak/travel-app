import { Fragment } from "react";
import ReactDOM from 'react-dom';
import BackDrop from "./BackDrop";
import ModalOverlay from "./ModalOverlay";

const portalEl = document.getElementById('overlays')

const Modal=({onCloseModal}) => {

    return <Fragment>
        {ReactDOM.createPortal(<BackDrop/>, portalEl)}
        {ReactDOM.createPortal(<ModalOverlay closeModal={onCloseModal}/>, portalEl)}
    </Fragment>;
}

export default Modal