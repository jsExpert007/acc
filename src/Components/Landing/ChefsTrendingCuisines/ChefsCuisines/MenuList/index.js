import React from 'react';
import './style.scss';
import ArrowDown from 'src/Assets/Images/Icons/arrow-down-yellow.svg';
import DecorationIcon from 'src/Assets/Images/Icons/decoration.png';
import GiftIcon from 'src/Assets/Images/Icons/gift.png';
import CoinIcon from 'src/Assets/Images/Icons/coins-icon.png';

export default function MenuList({
  isTopBorder,
  isDown,
  isLeftLogo,
  title,
  menus
}) {

  return (
    <div class="menu-list-component">
      {isTopBorder && <div className='border' />}
      <div className='header v-c'>
        <h4>{title}</h4>
        {isDown && <img src={ArrowDown} alt='arrow-down' className='arrow-down' />}
      </div>
      <div className='menu-list-content'>
        {menus.map((item, index) => (
          <div className='menu-item' key={index}>
            {isLeftLogo && (
              <div className='left-logo-content'>
                {item.leftIcon &&
                  <img src={item.leftIcon} alt='left-icon' className='left-icon' />
                }
              </div>
            )}
            <div>
              <div>{item.name}</div>
              {item.moreInfo && <div className='more-info'>{item.moreInfo}</div>}
            </div>
            {item.name === `ACC Affiliates` && (
                <img src={DecorationIcon} alt='right-icon' className='right-icon' />
            )}
            {item.name === `Buy Coins/Gifts` && (
              <div className='v-c'>
                <img src={GiftIcon} alt='right-icon' className='right-icon' />
                <img src={CoinIcon} alt='right-icon' className='right-icon' />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='border' />
    </div>
  );
}