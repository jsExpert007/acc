import React, { useEffect, useState } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import add from 'src/Assets/Images/Icons/add.svg';
import logo from 'src/Assets/Images/Logo/logo.png'
import { toggleSideBar } from 'src/Redux/Actions';

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSideBar } = useSelector((state) => state.Sidebar);

  const [isPrevOpen, setIsPrevOpen] = useState(false);

  useEffect(() => {
    setIsPrevOpen(isSideBar);
  }, []);

  const closeSidebar = () => {
    dispatch(toggleSideBar(false));
  };

  const onSignUp = () => {
    closeSidebar();
    navigate('/sign-up/step-1');
  };

  return (
    <div className={`sidebar-component ${isSideBar ? 'active' : isPrevOpen ? 'inactive' : ''}`}>
      <div className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="logo-area">
            <img src={logo} alt="logo" />
            <ReactSVG src={add} className='icon-close' onClick={closeSidebar} />
          </div>
          <div className="menu">
            <NavLink className="menu-item" exact to="/" onClick={closeSidebar}>Home</NavLink>
            <NavLink className="menu-item" exact to="/blog" onClick={closeSidebar}>Blog</NavLink>
            <a className="menu-item" href="/#section-pricing" onClick={closeSidebar}>Pricing</a>
            <NavLink className="menu-item" exact to="/demo" onClick={closeSidebar}>Demo</NavLink>
            <div className="sub-menu">
              <NavLink className="menu-item" exact to="/auth/sign-in" onClick={closeSidebar}>Sign In</NavLink>
              <NavLink className="menu-item" exact to="/sign-up/step-1" onClick={closeSidebar}>Sign Up</NavLink>
              <NavLink className="menu-item" exact to="/tutor-sign-up/tutor-info" onClick={closeSidebar}>Become a tutor</NavLink>
            </div>
            <div className="btn-2" onClick={onSignUp}>GET STARTED</div>
          </div>
        </div>
        <div className="sidebar-block" onClick={closeSidebar}></div>
      </div>
    </div>
  );
}