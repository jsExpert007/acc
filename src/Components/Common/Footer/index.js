import React from 'react';
import './style.scss';
import _ from 'lodash'
import { ReactSVG } from "react-svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from 'src/Assets/Images/Logo/gg-logo.png'
import googlePlay from 'src/Assets/Images/Icons/Social/google-play-icon.svg';
import appleStore from 'src/Assets/Images/Icons/Social/app-store-icon.svg';
import facebook from 'src/Assets/Images/Icons/Social/facebook.png';
import twitter from 'src/Assets/Images/Icons/Social/twitter.png';
import instagram from 'src/Assets/Images/Icons/Social/instagram.png';
import yt from 'src/Assets/Images/Icons/Social/yt.png';
import tiktok from 'src/Assets/Images/Icons/Social/tiktok.png';
import linkedin from 'src/Assets/Images/Icons/Social/linkedin.png';
import google from 'src/Assets/Images/Icons/Social/google.png';

export default function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const disableFooter = !!(window.location.pathname?.split('/')[1] === 'make-it-make-sense');

  const onBecomeTutor = () => {
    window.location.href = "https://gradegetter.com/tutor-home"
  };

  return (
    <div className="footer-component">
      <div className="container">
        <div className=' col-lg-12'>
          <div className='header'>
            <NavLink className="menu-item" exact to="/"><img src={logo} className="logo" alt="logo-active" /></NavLink>
            <div className='btn-2' onClick={onBecomeTutor}>BECOME A TUTOR</div>
          </div>
        </div>
        {!disableFooter && (
          <div className='body'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='tag-title'>Company</div>
                    <div className='tag-body'>
                      <a href="https://gradegetter.com/contact-us" className="tag" target="_blank" rel="noopener noreferrer">Contact Us</a>
                      <a href="https://gradegetter.com/team" className="tag" target="_blank" rel="noopener noreferrer">Team</a>
                      <a href="https://gradegetter.com/faqs" className="tag" target="_blank" rel="noopener noreferrer">FAQ</a>
                      <a href="https://gradegetter.com/refund" className="tag" target="_blank" rel="noopener noreferrer">Refund</a>
                      <a href="https://gradegetter.com/terms" className="tag" target="_blank" rel="noopener noreferrer">Terms</a>
                      <a href="https://gradegetter.com/blog" className="tag" target="_blank" rel="noopener noreferrer">Blog</a>
                      <a href="https://gradegetter.com/contact-us" className="tag" target="_blank" rel="noopener noreferrer">Press</a>
                      <a href="https://gradegetter.com/contact-us" className="tag" target="_blank" rel="noopener noreferrer">Careers</a>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='tag-title'>Know More</div>
                    <div className='tag-body'>
                      <NavLink className="tag" exact to="/auth/sign-up">Pricing</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">Stories</NavLink>
                      <a href="https://gradegetter.com/demo" className="tag" target="_blank" rel="noopener noreferrer">Demo</a>
                      <a href="https://gradegetter.com/features" className="tag" target="_blank" rel="noopener noreferrer">Features</a>
                      <NavLink className="tag" exact to="/auth/sign-up">Parents</NavLink>
                    </div>
                  </div>
                  {/* <div className='col-lg-3'>
                    <div className='tag-title'>Partners</div>
                    <div className='tag-body'>
                      <NavLink className="tag" exact to="/auth/sign-up">Co Operations</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">K-12</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">Higher Ed</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">None Profits</NavLink>
                    </div>
                  </div> */}
                  {/* <div className='col-lg-3'>
                    <div className='tag-title'>Top Subjects</div>
                    <div className='tag-body'>
                      <NavLink className="tag" exact to="/auth/sign-up">Math Tutors</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">Algebra Tutor</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">Geometry Tutors</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">Chemistry Tutors</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">Physics Tutors</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">SAT Tutors</NavLink>
                      <NavLink className="tag" exact to="/auth/sign-up">Ect</NavLink>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='row'>
                  {/* <div className='col-lg-3'>
                    <div className='tag-title'>Resources</div>
                    <div className='tag-body'>
                      <NavLink className="tag" exact to="/tutor-sign-up">WorkSheets</NavLink>
                      <NavLink className="tag" exact to="/tutor-sign-up">Flashcards</NavLink>
                      <NavLink className="tag" exact to="/tutor-sign-up">Practice Questions</NavLink>
                      <NavLink className="tag" exact to="/tutor-sign-up">Practice Test</NavLink>
                      <NavLink className="tag" exact to="/tutor-sign-up">Resource Center</NavLink>
                      <NavLink className="tag" exact to="/tutor-sign-up">Blog</NavLink>
                    </div>
                  </div> */}
                  <div className='col-lg-6'>
                    <div className='tag-title'>Our Brands</div>
                    <div className='tag-body'>
                      <NavLink className="tag" exact to="/">Make it Make Sense</NavLink>
                      {/* <a href="https://gradegetter.com/" className="tag" target="_blank" rel="noopener noreferrer">Make it Make Sense</a> */}
                      <a href="https://icodeedu.com/" className="tag" target="_blank" rel="noopener noreferrer">iCode Edu</a>
                      <a href="https://gradegetter.com/" className="tag" target="_blank" rel="noopener noreferrer">Grade TV</a>
                      <a href="https://gradegetter.com/" className="tag" target="_blank" rel="noopener noreferrer">Grade Getter</a>
                      {/* <a href="https://gradegetter.com/" className="tag" target="_blank" rel="noopener noreferrer">Ask Franky</a> */}
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='tag-title'>Make it Make Sense</div>
                    <div className='tag-body'>
                      <NavLink className="tag" exact to="/">ECT</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='footer'>
          <div className='stores'>
            <a href="https://play.google.com/store/apps/details?id=com.gradegetter&pli=1" target="_blank" rel="noopener noreferrer"><ReactSVG src={googlePlay} /></a>
            <a href="https://play.google.com/store/apps/details?id=com.gradegetter&pli=1" target="_blank" rel="noopener noreferrer"><ReactSVG src={appleStore} className='app-store' /></a>
          </div>
          <div className='footer-middle'>
            <NavLink className="footer__link" exact to="/" >© 2022 OnlineMathTutor</NavLink>
            <NavLink className="footer__link" exact to="/terms" >Terms of Service</NavLink>
            <NavLink className="footer__link" exact to="/privacy" >Privacy Policy</NavLink>
          </div>
          <div className='footer-right v-c'>
            <a href="https://www.facebook.com/gradegetter" className="social" target="_blank" rel="noopener noreferrer"><img src={facebook} alt='facebook' /></a>
            <a href="https://twitter.com/GradeGetter" className="social" target="_blank" rel="noopener noreferrer"><img src={twitter} alt='twitter' /></a>
            <a href="https://www.instagram.com/gradegetter" className="social" target="_blank" rel="noopener noreferrer"><img src={instagram} alt='instagram' /></a>
            <a href="https://www.youtube.com/channel/UC6howHvJniKu7YypUvFps9Q/?guided_help_flow=5" className="social" target="_blank" rel="noopener noreferrer"><img src={yt} alt='yt' /></a>
            <a href="https://www.tiktok.com/@onlinemathtutor?lang=en" className="social" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt='tiktok' /></a>
            <a href="https://www.linkedin.com/in/online-math-tutor-484ba0258/" className="social" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='linkedin' /></a>
            <a href="https://gradegetter.com" className="social" target="_blank" rel="noopener noreferrer"><img src={google} alt='google' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}