import React from 'react';
import './style.scss';
import StarIcon from 'src/Assets/Images/Icons/star.png';
import VideoItem from '../VideoItem';

export default function RecipesItem({
  className = '',
  info,
  onClick
}) {

  const {
    user,
    name,
    media_type,
    media
  } = info;

  return (
    <div
      className={`recipes-item-component ${className}`}
      onClick={onClick}>
      <div className='food-img-content'>
        {media_type.includes("image") ? (
          <img src={`${process.env.REACT_APP_IMAGE_DOMAIN}${media}`} alt='food-img' className='food-img' />
        ) : (
          <VideoItem
            media={media}
          />
        )}
      </div>
      <div className='detail-info v-c'>
        <div className='avatar-name v-c'>
          <img
            src={`${process.env.REACT_APP_IMAGE_DOMAIN}${user.avatar}`}
            alt='avatar'
            className='avatar'
          />
          <div className='name-content'>
            <div className='name'>{user.name}</div>
            <div className='user-name'>{`@${user.username}`}</div>
          </div>
        </div>
        <div className='rating-views'>
          <div className='rating-content v-c'>
            <img src={StarIcon} alt='star-icon' />
            <div className='rating'>{4.1}</div>
          </div>
          <div className='views'>{`22K Views`}</div>
        </div>
      </div>
      <div className='des'>{name}</div>
    </div>
  );
}