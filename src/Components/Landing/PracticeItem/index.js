import React from 'react';
import './style.scss';

export default function PracticeItem({
  className = '', info, onClick
}) {

  const {
    picture,
    questions_count,
    status,
  } = info

  return (
    <div className={`practice-item-component shadow-object ${className}`} onClick={() => onClick(info)}>
      <img src={`${process.env.REACT_APP_IMAGE_DOMAIN}${picture}`} alt='practice-logo' className='practice-logo' />
      <div className='footer'>
        <div className={`btn-2 practice-btn text-center ${status === 'active' ? 'active active-btn' : ''}`} >
          {`Practice ${questions_count} Questions`}
        </div>
      </div>
    </div>
  );
}