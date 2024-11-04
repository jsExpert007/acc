import React from 'react';
import './style.scss';

export default function CookingCategoryItem({
  className = '',
  info,
  id,
  name,
  logo,
  selectedId,
  onClick
}) {

  return (
    <div
      className={`cooking-category-item-component ${className} ${selectedId === id ? 'active' : ''}`}
      onClick={() => onClick(info)}>
      <div className='logo-content center'>
        <img src={logo} alt='category-logo' className='category-logo' />
        {selectedId !== id && <div className='logo-bg' />}
      </div>
      <div className='name'>{name}</div>
    </div>
  );
}