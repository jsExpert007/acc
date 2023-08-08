import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import mailIcon from 'src/Assets/Images/Auth/email.png';
import passwordIcon from 'src/Assets/Images/Auth/password.png';
import {
  FormInput,
  ContinueBtn,
  ToggleAuth,
  TextBtn,
  OrPolicy,
  SocialLogins,
} from 'src/Components';
import { toggleAuthModal } from 'src/Redux/Actions';

export default function SignUP({
  className = '',
  isAuthLogin,
  onToggleAuth,
}) {
  const dispatch = useDispatch();
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

  const onLogIn = () => {
    dispatch(toggleAuthModal(false));
    // navigate('/dashboard')
  };

  return (
    <div className={`sign-up-component ${className}`}>
      <ToggleAuth
        isAuthLogin={isAuthLogin}
        onToggleAuth={onToggleAuth}
      />
      <div className="auth-body">
        <div className='user-forms'>
          <FormInput
            isLabel
            label={"Email/Username"}
            icon={mailIcon}
            placeholder={'Your Email@/Username'}
            value={userInfo.email}
            onChange={e => onChangeUser('email', e)}
          />
          <FormInput
            type="password"
            isLabel
            label={"Password"}
            icon={passwordIcon}
            placeholder={'Enter Password'}
            value={userInfo.password}
            onChange={e => onChangeUser('password', e)}
          />
          <ContinueBtn
            className={'auth-btn'}
            btnText={"Join"}
            onClick={onLogIn}
          />
        </div>
        <OrPolicy />
        <SocialLogins />
      </div>
    </div>
  );
}