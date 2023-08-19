import React from 'react';
import './style.scss';
import { ReactSVG } from 'react-svg'
import { useDispatch, useSelector } from 'react-redux';
import { toggleVideoModal } from 'src/Redux/Actions';
import add from 'src/Assets/Images/Icons/add.svg';
import {
  MainModal,
} from 'src/Components';

export default function SuccessModal() {
  const dispatch = useDispatch();

  const {
    isVideoModal, videoInfo
  } = useSelector((state) => state.Modal);

  const onCloseModal = () => dispatch(toggleVideoModal(false));

  return (
    <MainModal
      isOpen={isVideoModal}
      onCloseModal={onCloseModal}>
      <div className='video-modal-component'>
        <div className="close-btn" onClick={onCloseModal}>
          <ReactSVG src={add} className='icon-close' />
        </div>
        <iframe
          src={`${process.env.REACT_APP_IMAGE_DOMAIN}${videoInfo?.media}`}
          className="video-player"
          title='tutor video'
          allowFullScreen>
        </iframe>
      </div>
    </MainModal>
  );
}
