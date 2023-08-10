import React from 'react';
import './style.scss';
import {
  CookingCategory,
  TrendingCuisineList,
} from 'src/Components';

export default function TrendingCuisines() {

  return (
    <div className='trending-cuisines-component'>
      <CookingCategory />
      <TrendingCuisineList />
    </div>
  );
}