import React from 'react';
import './style.scss';
import PremiumSubLogo from 'src/Assets/Images/Landing/premium-sub.svg';
import MenuList from './MenuList';
import {
  MemberGuideList,
  FoodDecoreList,
  FoalsList,
  SettingList,
} from './menus';

export default function ChefsCuisines() {

  return (
    <div className='chefs-cuisines-component show-web'>
      <h3>A Chefs Cuisine</h3>
      <MenuList
        title={'Member Guide'}
        menus={MemberGuideList}
      />
      <img src={PremiumSubLogo} alt='premium-logo' className='premium-logo' />
      <MenuList
        title={'Food Decore'}
        menus={FoodDecoreList}
        isTopBorder
        isDown
        isLeftLogo
      />
      <MenuList
        title={'Goals/Pref'}
        menus={FoalsList}
        isDown
        isLeftLogo
      />
      <MenuList
        title={'Settings'}
        menus={SettingList}
        isLeftLogo
      />

    </div>
  );
}