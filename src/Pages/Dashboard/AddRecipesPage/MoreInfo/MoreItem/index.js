import React from 'react';
import './style.scss';

export default function MoreItem({
  title,
  description
}) {

  return (
    <div className="more-item-component">
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
    </div>
  );
}
