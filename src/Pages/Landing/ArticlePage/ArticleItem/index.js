import React from 'react';
import './style.scss';
import StarIcon from 'src/Assets/Images/Icons/star.png';

export default function ArticleItem({
  className = '',
  info,
  onClick
}) {

  const {
    title,
    rating,
    des,
    img
  } = info;

  return (
    <div
      className={`article-item-component ${className}`}
      onClick={onClick}>
      <div className='food-img-content'>
        <img src={img} alt='food-img' className='food-img' />
      </div>
      <div className='detail-info'>
        <div className='description-rating v-c'>
          <div className='description'>{des}</div>
          <div className='rating-content v-c'>
            <img src={StarIcon} alt='star-icon' />
            <div className='rating'>{rating}</div>
          </div>
        </div>
        <div className='title'>{title}</div>
      </div>
    </div>
  );
}