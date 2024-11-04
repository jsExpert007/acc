import React from 'react';
import './style.scss';

export default function ContinueBtn({
  className = '',
  leftIcon,
  rightIcon,
  btnText = "Next",
  isDisable = false,
  onClick,
}) {


  return (
    <button
      className={`continue-btn cursor-pointer v-c h-c ${className} ${isDisable ? 'disabled' : ''}`}
      disabled={isDisable}
      onClick={onClick}>
      {leftIcon ? <img src={leftIcon} alt='btn-icon' className='left-icon' /> : null}
      <div className='btn-txt'>{btnText}</div>
      {rightIcon ? <img src={rightIcon} alt='btn-icon' className='right-icon' /> : null}
    </button >
  );
}
