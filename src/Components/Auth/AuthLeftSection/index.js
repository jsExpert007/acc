import React from 'react';
import './style.scss';
import Logo from 'src/Assets/Images/Logo/logo-md.png';
import LoginBg from 'src/Assets/Images/Auth/login-bg.png';
import SignupBg from 'src/Assets/Images/Auth/signup-bg.png';

export default function AuthLeftSection({
  className = '',
  isAuthLogin,
}) {

  return (
    <div className={`auth-left-section-component show-web ${className}`}>
      <img src={Logo} alt='logo' className='logo' />
      <div className='auth-bg-content center'>
        <img
          src={isAuthLogin ? LoginBg : SignupBg}
          alt='auth-bg'
          className='auth-bg'
        />
      </div>
    </div>
  );
}