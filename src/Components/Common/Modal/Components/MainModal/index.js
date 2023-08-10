import React from 'react';
import './style.scss';
import Modal from 'react-modal';

export default function MainModal({
  className = '',
  isOpen,
  onCloseModal,
  children
}) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      ariaHideApp={false}
      className={`main-modal-component ${className}`}
    >
      {children}
    </Modal>
  );
}
