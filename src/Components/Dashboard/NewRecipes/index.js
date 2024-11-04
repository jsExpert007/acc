import React from 'react';
import './style.scss';
import NewRecipesItem from './NewRecipesItem';
import { NewRecipesInfo } from './NewRecipesInfo';

export default function NewRecipes() {

  return (
    <div className='new-recipes-component'>
      <h4>New Recipes</h4>
      <div className='new-recipes-container'>
        {NewRecipesInfo.map((item, index) => (
          <NewRecipesItem
            key={index}
            info={item}
          />
        ))}
      </div>
    </div>
  );
}