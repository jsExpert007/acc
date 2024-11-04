import React from 'react';
import './style.scss';

export default function SocialBtn({
  className = '',
  leftIcon,
  btnText = "Next",
  isDisable = false,
  onClick,
}) {


  return (
    <button
      className={`social-btn-component cursor-pointer v-c ${className} ${isDisable ? 'disabled' : ''}`}
      disabled={isDisable}
      onClick={onClick}>
      {leftIcon ? <img src={leftIcon} alt='btn-icon' className='left-icon' /> : null}
      <div className='btn-txt'>{btnText}</div>
    </button >
  );
}
