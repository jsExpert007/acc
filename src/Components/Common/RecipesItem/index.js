import React from 'react';
import './style.scss';
import StarIcon from 'src/Assets/Images/Icons/star.png';

export default function RecipesItem({
  className = '',
  info,
  onClick
}) {

  const {
    user,
    name
  } = info;

  return (
    <div
      className={`recipes-item-component ${className}`}
      onClick={onClick}>
      <div className='food-img-content'>
        <img src={`${process.env.REACT_APP_IMAGE_DOMAIN}${info.category.image}`} alt='food-img' className='food-img' />
      </div>
      <div className='detail-info v-c'>
        <div className='avatar-name v-c'>
          <img src={`${process.env.REACT_APP_IMAGE_DOMAIN}${user.avatar}`} alt='avatar' className='avatar' />
          <div className='name-content'>
            <div className='name'>{user.name}</div>
            <div className='user-name'>{user.userName}</div>
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