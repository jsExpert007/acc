import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import {
  FormInput,
  ContinueBtn,
  ToggleAuth,
} from 'src/Components';
export default function SignUP({
  className = '',
  isAuthLogin,
  onToggleAuth,
}) {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const onChangeUser = (field, value) => {
    setUserInfo({
      ...userInfo,
      [field]: value,
    });
  };

  const onLogIn = () => { navigate('/dashboard') };

  return (
    <div className={`sign-up-component ${className}`}>
      <ToggleAuth
        isAuthLogin={isAuthLogin}
        onToggleAuth={onToggleAuth}
      />
      <div className="login-page__body">
        <FormInput
          isLabel
          label={"Email/Username"}
          value={userInfo.email}
          onChange={e => onChangeUser('email', e)}
        />
        <FormInput
          type="password"
          isLabel
          label={"Password"}
          value={userInfo.password}
          onChange={e => onChangeUser('password', e)}
        />
        <ContinueBtn
          className={'next-btn'}
          btnText={"Join"}
          onClick={onLogIn}
        />
      </div>
    </div>
  );
}