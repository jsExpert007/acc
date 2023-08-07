import React from 'react';
import './style.scss';
import VideoPlayIcon from "src/Assets/Images/Icons/play-icon-2.svg";

export default function VideoItem({
  className = '',
  thumbImg,
  onClick
}) {

  return (
    <div className={`video-item-component ${className}`} onClick={onClick}>
      <img src={thumbImg} alt='review-img' className='thumb-img' />
      <img src={VideoPlayIcon} alt='play-icon' className='play-icon' />
      {/* <img src={Logo} alt='Logo' className='logo' /> */}
    </div>
  );
}