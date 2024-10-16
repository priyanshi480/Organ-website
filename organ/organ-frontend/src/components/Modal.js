import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    width: '400px',
  },
};

const CustomModal = ({ isOpen, closeModal, contentLabel, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyle} contentLabel={contentLabel}>
      {children}
    </Modal>
  );
};

export default CustomModal;
