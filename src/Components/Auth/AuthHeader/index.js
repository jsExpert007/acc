import React, { useEffect, useState } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import logo from 'src/Assets/Images/Logo/logo.png'

export default function AuthHeader() {

  const [transform, setTransform] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setTransform(window.scrollY > 0 ? true : false)
  }

  const showInactiveHeader = () => {
    return !transform
  }

  return (
    <div className={`auth-header-component ${showInactiveHeader() ? 'inactive' : ''}`}>
      <div className="container header-container v-c">
        <div className='v-c'>
          <NavLink className="menu-item" exact to="/"><img src={logo} className="logo" alt="logo-active" /></NavLink>
        </div>
        <div className="web-menu v-c show-web-flex">
          {/* <NavLink className="box-menu" exact to="/auth/sign-up">GET STARTED</NavLink> */}
        </div>
      </div>
    </div>
  );
}