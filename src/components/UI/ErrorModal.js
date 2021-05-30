import React from 'react';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

import ReactDOM from 'react-dom';

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCancelError}/>,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title ={props.title} message = {props.message} onClick={props.onCancelError}/>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
