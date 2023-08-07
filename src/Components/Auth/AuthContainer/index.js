import React from 'react';
import './style.scss';
import logo from 'src/Assets/Images/Logo/logo.png'

export default function AuthContainer({
  children
}) {
  return (
    <div className="auth-container">
      <div className="ads-area show-web">
        <img src={logo} className="logo" alt="logo-active" />
      </div>
      <div className="auth-content">
        <div className="main-col">
          {children}
        </div>
      </div>
    </div>
  );
}