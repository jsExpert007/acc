import React from 'react';
import './style.scss';

export default function TextBtn({
  className = '',
  btnText,
  onClick,
}) {
  return (
    <div className={`text-btn cursor-pointer ${className}`} onClick={onClick}>
      {btnText}
    </div >
  );
}
