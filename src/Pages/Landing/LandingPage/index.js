import React from 'react';
import './style.scss';
import {
  LandingStart,
  FilterSearch,
  ChefsTrendingCuisines,
  WeeklyFoodPlan,
} from 'src/Components';

export default function LandingPage() {

  return (
    <div className="lading-page">
      <LandingStart />
      <FilterSearch 
        className='filter-search'
      />
      <ChefsTrendingCuisines />
      <WeeklyFoodPlan />
    </div>
  );
}
