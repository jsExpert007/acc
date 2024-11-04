import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import logo from 'src/Assets/Images/Logo/logo-sm.png'
import { toggleAuthModal } from 'src/Redux/Actions';
import Shipping from './Shipping';
import Profile from './Profile';

export default function Header({
  isDashboard
}) {

  const dispatch = useDispatch();

  const onAuth = (isLogin) => {
    dispatch(toggleAuthModal(true, isLogin));
  }

  return (
    <div className='header-component'>
      <div className="header-container v-c">
        <div className='logo-container'>
          <a href={`${isDashboard? '/dashboard' : '/'}`} className="center" rel="noopener noreferrer">
            <img src={logo} className="logo" alt="logo-active" />
          </a>
        </div>
        <div className='menu-list v-c'>
          <div className='show-web-flex v-c'>
            <div className='box-menu'>Recipes</div>
            <div className='box-menu'>Notifications</div>
            <div className='box-menu'>Recipe Pref</div>
            <div className='box-menu'>Articles</div>
          </div>
          {isDashboard ? (
            <div className='v-c'>
              <Shipping />
              <Profile />
            </div>
          ) : (
            <div className='v-c'>
              <div className='box-menu auth-btn' onClick={() => onAuth(false)}>SIGN UP</div>
              <div className='box-menu auth-btn' onClick={() => onAuth(true)}>LOGIN</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}