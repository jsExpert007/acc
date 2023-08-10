import React from 'react';
import './style.scss';
import {
  RecipesItem,
} from 'src/Components';
import { AllRecipesInfo } from './AllRecipesInfo';

export default function AllRecipes() {

  return (
    <div className='all-recipes-component'>
      <div className='all-recipes-container'>
        <div className='title'>All Recipe's</div>
        <div className='week-food-list'>
          {AllRecipesInfo.map((item, index) => (
            <RecipesItem
              key={index}
              info={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}