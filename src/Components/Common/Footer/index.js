import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import logo from 'src/Assets/Images/Logo/logo-lg.png'
import DecorationIcon from 'src/Assets/Images/Icons/decoration.png'
import PremiumSubLogo from 'src/Assets/Images/Landing/premium-sub.svg';
import {
  SocialShares,
  JoinNewsLetter,
} from 'src/Components';

export default function Footer() {

  return (
    <div className="footer-component">
      <div className='left-section'>
        <Link className="menu-item" exact to="/">
          <img src={logo} className="logo" alt="logo-active" />
        </Link>
        <div className='reserved'>All Rights Reserved.</div>
      </div>
      <div className='right-section'>
        <div className='recipe-news'>
          <div className='footer-section'>
            <h4>Fresh Recipe</h4>
            <Link className="footer_link" exact to="/" >Recipes</Link>
            <Link className="footer_link" exact to="/" >Medicinal Recipe's</Link>
            <Link className="footer_link" exact to="/" >Copy Cat Recipe's</Link>
            <Link className="footer_link" exact to="/" >Fermentation</Link>
            <Link className="footer_link" exact to="/" >Meal Plan</Link>
          </div>
          <div className='footer-section'>
            <h4>In News</h4>
            <Link className="footer_link" exact to="/" >Articles</Link>
            <div className='v-c'>
              <Link className="footer_link" exact to="/" >Become a Affiliate</Link>
              <img src={DecorationIcon} alt='decoration-icon' />
            </div>  
            <Link className="footer_link" exact to="/" >Join bookings</Link>
            <Link className="footer_link" exact to="/terms" >Terms Of Service</Link>
            <Link className="footer_link" exact to="/privacy-policy" >Private Policy</Link>
          </div>
        </div>
        <div className='about-us-section'>
          <div className='footer-section about-us-list'>
            <h4>About US</h4>
            <Link className="footer_link" exact to="/faqs" >FAQs</Link>
            <Link className="footer_link" exact to="/" >Advertise</Link>
            <Link className="footer_link" exact to="/" >Contact Us</Link>
            <Link className="footer_link" exact to="/" >Mobile</Link>
          </div>
          <img src={PremiumSubLogo} alt='premium-logo' className='premium-logo' />
        </div>
        <div className='footer-section'>
          <h3>Join Our Newsletter</h3>
          <JoinNewsLetter />
          <SocialShares />
        </div>
      </div>
    </div>
  );
}