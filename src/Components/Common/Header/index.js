import React, { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import logo from 'src/Assets/Images/Logo/logo.png'
import Helper from 'src/Utils/Helper';

export default function Header() {
  const dispatch = useDispatch();

  const [transform, setTransform] = useState(false);

  const disableTopMenu = !(window.location.pathname?.split('/')[1] === '');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setTransform(window.scrollY > 0 ? true : false)
  }

  const showInactiveHeader = () => {
    return !transform
  };

  const onPlan = () => {
    const pathname = window.location.pathname.replaceAll("/", "");
    if (!pathname) {
      Helper.showToast('error', 3000, "Select the test prep you need help with before clicking Get Started!");
    } else {
    }
  };

  return (
    <div className={`header-component ${showInactiveHeader() ? 'inactive' : ''} ${disableTopMenu ? 'disable-top-menu' : ''}`}>
      <div className="container header-container v-c">
        <div >
          <a href="/" className="menu-item" rel="noopener noreferrer">
            <img src={logo} className="logo" alt="logo-active" />
          </a>
        </div>
        <div className="web-menu v-c">
          <a href="https://gradegetter.com/sign-in" className="box-menu sign-in" rel="noopener noreferrer">SIGN IN</a>
          <div className="box-menu sign-up-btn" onClick={onPlan}>Try it Free For 7 Days</div>
        </div>
      </div>
    </div>
  );
}