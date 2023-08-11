import React, { useState } from 'react';
import './style.scss';
import Avatar from 'src/Assets/Images/Landing/Trending-Cuisines/avatar-1.png';
import VerifyIcon from 'src/Assets/Images/Icons/verify-icon.png'
import { ProfileInfo } from './profileList';

export default function Profile() {

  const [isShow, setIsShow] = useState(false);

  const onShowProfile = () => setIsShow(!isShow);

  return (
    <div className='profile-component'>
      <img src={Avatar} alt='avatar' className='avatar' onClick={onShowProfile} />
      <img src={VerifyIcon} alt='verify-icon' className='verify-icon' />
      {isShow && (
        <div className='profile-list'>
          <div className='header'>Profile</div>
          {ProfileInfo.map((item, index) => (
            <div className='profile-item v-c' key={index}>
              <img src={item.icon} alt='left-icon' className='left-icon' />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}