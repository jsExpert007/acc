import React, { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import LoginBg from 'src/Assets/Images/Auth/login-bg.png';
import { toggleAuthModal } from 'src/Redux/Actions';
import {
  MainModal,
  AuthLeftSection,
  Login,
  SignUP,
} from 'src/Components';

export default function SuccessModal() {
  const dispatch = useDispatch();

  const {
    isAuthModal, isLogin
  } = useSelector((state) => state.Modal);

  const [isAuthLogin, setIsAuthLogin] = useState(false);

  useEffect(() => {
    setIsAuthLogin(isLogin);
  }, [isLogin]);

  const onCloseModal = () => dispatch(toggleAuthModal(false));

  const onToggleAuth = (v) => {
    setIsAuthLogin(v);
  };

  return (
    <MainModal
      isOpen={isAuthModal}
      onCloseModal={onCloseModal}>
      <div className='auth-modal-component'>
        <AuthLeftSection />
        <div className='right-section'>
          {isAuthLogin ? (
            <Login
              isAuthLogin={isAuthLogin}
              onToggleAuth={onToggleAuth}
            />
          ) : (
            <SignUP
              isAuthLogin={isAuthLogin}
              onToggleAuth={onToggleAuth}
            />
          )}
        </div>
      </div>
    </MainModal>
  );
}
