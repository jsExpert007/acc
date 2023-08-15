import React from 'react';
import './style.scss';
import ChefsCuisines from './ChefsCuisines';
import TrendingCuisines from './TrendingCuisines';

export default function ChefsTrendingCuisines({
  isLanding
}) {

  return (
    <div className='chefs-trending-cuisines-component'>
      <ChefsCuisines />
      <TrendingCuisines isLanding={isLanding} />
    </div>
  );
}