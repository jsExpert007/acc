import React from 'react';
import './style.scss';

export default function LeftInfoContainer({
  className = '',
  leftChildren,
  children
}) {

  return (
    <div className='left-info-component'>
      <div className='left-section'>{leftChildren}</div>
      <div className={`right-section ${className}`}>{children}</div>
    </div>
  );
}