import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import VideoPlayIcon from "src/Assets/Images/Icons/play-icon-2.png";
import DefaultThumbImg from "src/Assets/Images/Dashboard/thumb-img.jpg";
import { toggleVideoModal } from 'src/Redux/Actions';

export default function VideoItem({
  className = '',
  thumbImg = DefaultThumbImg,
  media
}) {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log("==media==", media)
    dispatch(toggleVideoModal(true, { media }))
  }

  return (
    <div className={`video-item-component ${className}`} onClick={onClick}>
      <img src={thumbImg} alt='review-img' className='thumb-img' />
      <div className='play-icon-content center'>
        <img src={VideoPlayIcon} alt='play-icon' className='play-icon' />
      </div>
      {/* <img src={Logo} alt='Logo' className='logo' /> */}
    </div>
  );
}