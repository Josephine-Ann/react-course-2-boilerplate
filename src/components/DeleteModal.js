import React from 'react';
import Modal from 'react-modal';

const DeleteModal = (props) => (
    <Modal 
    isOpen={!!props.modalOpen}
    contentLabel="deletedOption"
    onRequestClose={props.clearStateCloseModal}
    onRemove={props.onRemove}
    >
       <h3>Are you sure you want to delete this?</h3>
       <button onClick={props.onRemove}>Yes!</button>
       <button onClick={props.clearStateCloseModal}>Noooo!</button>
    </Modal>
);

export default DeleteModal;