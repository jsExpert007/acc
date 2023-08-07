import React from 'react';
import './style.scss';

export default function ToggleAuth({
  className = '',
  isAuthLogin,
  onToggleAuth,
}) {

  return (
    <div className={`toggle-auth-component ${className}`}>
      <div
        className={`auth-btn center ${isAuthLogin ? 'active' : ''}`}
        onClick={() => onToggleAuth(true)}>
        Login in
      </div>
      <div className='border' />
      <div
        className={`auth-btn center ${!isAuthLogin ? 'active' : ''}`}
        onClick={() => onToggleAuth(false)}>
        Join Now!
      </div>
    </div>
  );
}