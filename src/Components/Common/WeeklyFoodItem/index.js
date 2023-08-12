import React from 'react';
import './style.scss';

export default function WeeklyFoodItem({
  className = '',
  info,
  onClick
}) {

  const {
    day,
    logo,
  } = info;

  return (
    <div
      className={`weekly-food-item-component ${className}`}
      onClick={onClick}>
        <div className='food-logo-content'>
          <img src={logo} alt='food-logo' className='food-logo' />
        </div>
      <div className='day'>{day}</div>
    </div>
  );
}