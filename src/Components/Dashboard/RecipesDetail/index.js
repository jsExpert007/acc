import React from 'react';
import './style.scss';
import {
  FollowsNewRecipes,
  RecipesList,
} from 'src/Components';

export default function RecipesDetail() {

  return (
    <div className='recipes-detail-component'>
      <FollowsNewRecipes />
      <RecipesList />
    </div>
  );
}