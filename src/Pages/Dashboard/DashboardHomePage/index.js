import React, { useState } from 'react';
import './style.scss';
import { RecipesCategories } from 'src/Constant';
import {
  LandingStart,
  FilterSearch,
  ChefsTrendingCuisines,
  WeeklyFoodPlan,
} from 'src/Components';

export default function DashboardHomePage() {

  const [currentCategory, setCurrentCategory] = useState(RecipesCategories[1]);

  const onSelectCategory = (info) => setCurrentCategory(info);

  return (
    <div className="dashboard-page">
      <LandingStart />
      <FilterSearch 
        className='filter-search'
        category={currentCategory}
        dropListInfo={RecipesCategories}
        onSelectCategory={onSelectCategory}
      />
      <ChefsTrendingCuisines />
      <WeeklyFoodPlan />
    </div>
  );
}
