import React from 'react';
import './style.scss';

export default function NewRecipesItem({
  info,
}) {

  const {
    avatar,
    name,
    des
  } = info


  return (
    <div className='new-recipes-item-component'>
      <img src={avatar} alt='avatar' className='avatar' />
      <div className='name-description'>
        <div className='name'>{name}</div>
        <div className='description'>{des}</div>
      </div>
    </div >
  );
}