import React from 'react';
import './style.scss';

export default function CookingCategoryItem({
  className = '',
  info,
  onClick
}) {

  const {
    name,
    logo,
  } = info;

  return (
    <div
      className={`cooking-category-item-component ${className}`}
      onClick={() => onClick(info)}>
      <img src={logo} alt='category-logo' className='category-logo' />
      <div className='name'>{name}</div>
    </div>
  );
}