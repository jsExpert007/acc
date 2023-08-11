import React from 'react';
import './style.scss';
import { FoodItem } from 'src/Components';
import { categories } from './categories';

export default function RecipesList() {

  return (
    <div className='recipes-list-component'>
      <div className='recipes-list-container'>
        {categories.map((item, index) => (
          <FoodItem
            key={index}
            info={item}
          />
        ))}
      </div>
    </div>
  );
}