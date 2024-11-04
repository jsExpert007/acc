import React from 'react';
import './style.scss';
import {
  FollowsNewRecipes,
  RecipesList,
} from 'src/Components';

export default function RecipesDetail({
  searchText='',
  currentCategory
}) {

  return (
    <div className='recipes-detail-component'>
      <FollowsNewRecipes />
      <RecipesList 
        searchText={searchText}
        currentCategory={currentCategory}
      />
    </div>
  );
}