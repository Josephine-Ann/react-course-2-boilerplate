import React from 'react';
import Modal from 'react-modal';

const FinishedModalUni = (props) => (
    <Modal 
    isOpen={!!props.modalOpenFinished}
    contentLabel="modalOpenFinished"
    onRequestClose={props.clearStateCloseModalFinished}
    onFinish={props.onFinish}
    className="modal"
    >
       <p className="modal__body">You have finished studying, if you like this board add it to your personal list!</p>
       <button className="button" onClick={props.onFinish}>Okay!</button>
    </Modal>
);

export default FinishedModalUni;