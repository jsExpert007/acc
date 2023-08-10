import React from 'react';
import './style.scss';
import {
  SuggestionsForYou,
  NewRecipes,
  Discovery,
} from 'src/Components';

export default function FollowsNewRecipes() {

  return (
    <div className='follows-new-recipes-component show-web'>
      <SuggestionsForYou />
      <NewRecipes />
      <Discovery />
    </div>
  );
}