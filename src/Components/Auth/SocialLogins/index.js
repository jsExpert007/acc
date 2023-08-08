import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from 'src/Assets/Images/Auth/facebook-icon.png';
import GoogleIcon from 'src/Assets/Images/Auth/google-icon.png';
import AppleIcon from 'src/Assets/Images/Auth/apple-icon.png';
import {
  SocialBtn,
} from 'src/Components';

export default function SocialLogins({
  className = '',
}) {

  const navigate = useNavigate();

  const onLogIn = () => { };

  return (
    <div className={`social-logins-component ${className}`}>
      <SocialBtn
        className={'auth-btn'}
        btnText={"Connect with Facebook"}
        leftIcon={FacebookIcon}
        onClick={onLogIn}
      />
      <SocialBtn
        className={'auth-btn'}
        btnText={"Connect with Google"}
        leftIcon={GoogleIcon}
        onClick={onLogIn}
      />
      <SocialBtn
        className={'auth-btn'}
        btnText={"Connect with Apple"}
        leftIcon={AppleIcon}
        onClick={onLogIn}
      />
    </div>
  );
}