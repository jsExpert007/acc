import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import Avatar from 'src/Assets/Images/Landing/Trending-Cuisines/avatar-1.png';
import VerifyIcon from 'src/Assets/Images/Icons/verify-icon.png'
import { ProfileInfo } from './profileList';

export default function Profile() {
  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(false);

  const onShowProfile = () => setIsShow(!isShow);

  const onProfile = (info) => {
    setIsShow(false);
    if (info.link) {
      navigate(`/dashboard/${info.link}`)
    } else {
      navigate(`/`)
    }
  };

  return (
    <div className='profile-component'>
      <img src={Avatar} alt='avatar' className='avatar' onClick={onShowProfile} />
      <img src={VerifyIcon} alt='verify-icon' className='verify-icon' />
      {isShow && (
        <div className='profile-list shadow-object'>
          <div className='header center'>Profile</div>
          {ProfileInfo.map((item, index) => (
            <div className='profile-item v-c' key={index} onClick={() => onProfile(item)}>
              <img src={item.icon} alt='left-icon' className='left-icon' />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}