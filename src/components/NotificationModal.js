import React from 'react';
import Modal from 'react-modal';

const NotificationModal = (props) => (
    <Modal
        isOpen={!!props.modalOpen}
        contentLabel="modalOpen"
        onRequestClose={props.clearStateCloseModal}
        className="modal"
    >
        <p className="modal__body">Now continue to say the word in English, although you now see it in Spanish!</p>
        <button className="button" onClick={props.clearStateCloseModal}>Okay!</button>
    </Modal>
);

export default NotificationModal;