import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import {
  ContinueBtn,
} from 'src/Components';

export default function SocialLogins({
  className = '',
}) {
  const navigate = useNavigate();

  const onLogIn = () => { navigate('/dashboard') };

  return (
    <div className={`social-logins-component ${className}`}>
      <ContinueBtn
        className={'next-btn'}
        btnText={"Join"}
        onClick={onLogIn}
      />
      <ContinueBtn
        className={'next-btn'}
        btnText={"Join"}
        onClick={onLogIn}
      />
      <ContinueBtn
        className={'next-btn'}
        btnText={"Join"}
        onClick={onLogIn}
      />
    </div>
  );
}