import React from 'react';
import './style.scss';
import StarIcon from 'src/Assets/Images/Icons/star.png';

export default function RecipesItem({
  className = '',
  info,
  onClick
}) {

  const {
    avatar,
    name,
    userName,
    rating,
    views,
    des,
    img
  } = info;

  return (
    <div
      className={`recipes-item-component ${className}`}
      onClick={onClick}>
      <img src={img} alt='food-img' className='food-img' />
      <div className='detail-info v-c'>
        <div className='avatar-name v-c'>
          <img src={avatar} alt='avatar' className='avatar' />
          <div className='name-content'>
            <div className='name'>{name}</div>
            <div className='user-name'>{userName}</div>
          </div>
        </div>
        <div className='rating-views'>
          <div className='rating-content v-c'>
            <img src={StarIcon} alt='star-icon' />
            <div className='rating'>{rating}</div>
          </div>
          <div className='views'>{`${views} Views`}</div>
        </div>
      </div>
      <div className='des'>{des}</div>
    </div>
  );
}