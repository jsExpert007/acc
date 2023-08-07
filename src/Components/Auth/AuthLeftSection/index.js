import React from 'react';
import './style.scss';
import Logo from 'src/Assets/Images/Logo/logo-md.png';
import LoginBg from 'src/Assets/Images/Auth/login-bg.png';

export default function AuthLeftSection({
  className = '',
}) {

  return (
    <div className={`auth-left-section-component show-web ${className}`}>
      <img src={Logo} alt='logo' className='logo' />
      <img src={LoginBg} alt='auth-bg' className='auth-bg' />
    </div>
  );
}