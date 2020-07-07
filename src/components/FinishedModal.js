import React from 'react';
import Modal from 'react-modal';

const FinishedModal = (props) => (
    <Modal 
    isOpen={!!props.modalOpenFinished}
    contentLabel="modalOpenFinished"
    onRequestClose={props.clearStateCloseModalFinished}
    onFinish={props.onFinish}
    className="modal"
    >
       <p className="modal__body">You have finished studying, when you need to study again this board will turn red!</p>
       <button className="button" onClick={props.onFinish}>Okay!</button>
    </Modal>
);

export default FinishedModal;

