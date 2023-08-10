import React from 'react';
import './style.scss';
import facebook from 'src/Assets/Images/Icons/Social/facebook.png';
import twitter from 'src/Assets/Images/Icons/Social/twitter.png';
import instagram from 'src/Assets/Images/Icons/Social/instagram.png';
import pinterest from 'src/Assets/Images/Icons/Social/pinterest.png';
import yt from 'src/Assets/Images/Icons/Social/yt.png';
import tiktok from 'src/Assets/Images/Icons/Social/tiktok.png';

export default function SocialShares() {

  return (
    <div className='social-shares-component v-c'>
      <a href="https://www.facebook.com/" className="social" target="_blank" rel="noopener noreferrer"><img src={facebook} alt='facebook' /></a>
      <a href="https://www.instagram.com/" className="social" target="_blank" rel="noopener noreferrer"><img src={instagram} alt='instagram' /></a>
      <a href="https://twitter.com/" className="social" target="_blank" rel="noopener noreferrer"><img src={twitter} alt='twitter' /></a>
      <a href="https://www.pinterest.com" className="social" target="_blank" rel="noopener noreferrer"><img src={pinterest} alt='instagram' /></a>
      <a href="https://www.youtube.com/" className="social" target="_blank" rel="noopener noreferrer"><img src={yt} alt='yt' /></a>
      <a href="https://www.tiktok.com/@onlinemathtutor?lang=en" className="social" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt='tiktok' /></a>
    </div>
  );
}