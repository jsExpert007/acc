import React from 'react';
import './style.scss';
import { ReactSVG } from 'react-svg'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import add from 'src/Assets/Images/Icons/add.svg';
import { toggleNoteModal } from 'src/Redux/Actions';

export default function NoteModal() {
  const dispatch = useDispatch();

  const {
    isNoteModal, note
  } = useSelector((state) => state.Modal);

  const closeModal = () => {
    dispatch(toggleNoteModal(false));
  };

  return (
    <Modal show={isNoteModal} className="note-modal-component">
      <div className="note-content v-r">
        <div className="close-btn">
          <ReactSVG src={add} className='icon-close' onClick={closeModal} />
        </div>
        <div
          className='modal-text'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: note }}
        />
      </div>
    </Modal>
  );
}