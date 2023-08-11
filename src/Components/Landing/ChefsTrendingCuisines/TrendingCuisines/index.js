import React from 'react';
import './style.scss';
import {
  CookingCategory,
  TrendingCuisineList,
} from 'src/Components';

export default function TrendingCuisines({
  isLanding
}) {

  return (
    <div className='trending-cuisines-component'>
      <CookingCategory isLanding={isLanding} />
      <TrendingCuisineList />
    </div>
  );
}