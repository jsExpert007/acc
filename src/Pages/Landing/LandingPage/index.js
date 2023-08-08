import React from 'react';
import './style.scss';
import {
  LandingStart,
  ChefsTrendingCuisines,
  WeeklyFoodPlan,
} from 'src/Components';

export default function LandingPage() {

  return (
    <div className="lading-page">
      <LandingStart />
      <ChefsTrendingCuisines />
      <WeeklyFoodPlan />
    </div>
  );
}
