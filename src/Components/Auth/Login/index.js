import React, { useEffect, useState, useRef } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import { toggleAuthModal, signIn } from 'src/Redux/Actions';
import { showSpinner, hideSpinner, showToast } from 'src/Utils/Helper';
import { EmailValidation } from 'src/Utils/Validation';

export default function Login({
  className = '',
  isAuthLogin,
  onToggleAuth,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoadingRef = useRef(false);

  const {
    user, token, login_res, login_success, login_loading
  } = useSelector(
    state => state.Auth,
  );

  //Login Res
  useEffect(() => {
    if (LoadingRef.current && !login_loading) {
      hideSpinner();
      if (login_success && user && token) {
        dispatch(toggleAuthModal(false));
        showToast('success', 3000, login_res);
        navigate('/dashboard')
      } else {
        showToast('error', 3000, login_res);
      };
    }
    LoadingRef.current = login_loading;
  }, [dispatch, login_loading, login_success, navigate, login_res, user, token]);

  const [userInfo, setUserInfo] = useState({
    email: '', //user@gmail.com
    password: '', //user@123
  });

  const onChangeUser = (field, value) => {
    setUserInfo({
      ...userInfo,
      [field]: value,
    });
  };

  const onForgotPass = () => { };

  const onLogIn = () => {
    showSpinner();
    dispatch(signIn(userInfo));
  };

  return (
    <div className={`login-component ${className}`}>
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
            validation={EmailValidation(userInfo.email)}
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
          <TextBtn
            className='forgot-pass'
            btnText={'Forgot your password?'}
            onClick={onForgotPass}
          />
          <ContinueBtn
            className={'auth-btn'}
            isDisable={!(EmailValidation(userInfo.email) && userInfo.password)}
            btnText={"Log in"}
            onClick={onLogIn}
          />
        </div>
        <OrPolicy />
        <SocialLogins />
      </div>
    </div>
  );
}