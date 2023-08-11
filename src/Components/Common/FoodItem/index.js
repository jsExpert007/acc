import React from 'react';
import './style.scss';

export default function FoodItem({
  className = '',
  info,
  onClick
}) {

  const {
    name,
    recipesNum,
    img
  } = info;

  return (
    <div
      className={`food-item-component ${className}`}
      onClick={onClick}>
      <img src={img} alt='food-img' className='food-img' />
      <div className='description-content'>
        <div className='name'>{name}</div>
        <div className='recipes-num'><strong>{recipesNum}</strong>{` Recipes`}</div>
      </div>
    </div>
  );
}