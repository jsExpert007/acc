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
import { AllRecipesFist } from 'src/Constant';

export default function LandingPage() {

  const {
    category_list
  } = useSelector(
    state => state.Category,
  );

  const [currentCategory, setCurrentCategory] = useState(AllRecipesFist);
  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (v) => setSearchText(v);

  // useEffect(() => {
  //   if (!_.isEmpty(category_list)) {
  //     setCurrentCategory(category_list[0])
  //   }
  // }, [category_list]);

  const onSelectCategory = (info) => setCurrentCategory(info);

  return (
    <div className="lading-page">
      <LandingStart />
      <FilterSearch
        className='filter-search'
        currentCategory={currentCategory}
        dropListInfo={[AllRecipesFist, ...category_list]}
        onSelectCategory={onSelectCategory}
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
      <ChefsTrendingCuisines
        isLanding
        searchText={searchText}
        currentCategory={currentCategory}
      />
      <WeeklyFoodPlan />
    </div>
  );
}
