import React, { useState, useEffect } from 'react';
import './style.scss';
import _ from 'lodash'
import { useSelector } from 'react-redux';
import {
  LandingStart,
  FilterSearch,
  ChefsTrendingCuisines,
  WeeklyFoodPlan,
} from 'src/Components';

export default function LandingPage() {

  const {
    category_list
   } = useSelector(
     state => state.Category,
   );

  const [currentCategory, setCurrentCategory] = useState([]);

  useEffect(() => {
    if(!_.isEmpty(category_list)) {
      setCurrentCategory(category_list[0])
    }
  }, [category_list]);

  const onSelectCategory = (info) => setCurrentCategory(info);

  return (
    <div className="lading-page">
      <LandingStart />
      <FilterSearch
        className='filter-search'
        currentCategory={currentCategory}
        dropListInfo={category_list}
        onSelectCategory={onSelectCategory}
      />
      <ChefsTrendingCuisines isLanding />
      <WeeklyFoodPlan />
    </div>
  );
}
