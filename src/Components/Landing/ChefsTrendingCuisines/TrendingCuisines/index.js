import React from 'react';
import './style.scss';
import {
  FilterSearch,
  CookingCategory,
  TrendingCuisineList,
} from 'src/Components';

export default function TrendingCuisines() {

  return (
    <div className='trending-cuisines-component'>
      <FilterSearch />
      <CookingCategory />
      <TrendingCuisineList />
    </div>
  );
}