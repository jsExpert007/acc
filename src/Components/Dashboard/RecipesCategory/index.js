import React from 'react';
import './style.scss';
import { categories } from './categories';
import { CookingCategoryItem } from 'src/Components';

export default function RecipesCategory() {

  return (
    <div className='recipes-category-component'>
      <h3 className='title'>Food</h3>
      <div className='category-list'>
        {categories.map((item, index) => (
          <CookingCategoryItem
            key={index}
            info={item}
          />
        ))}
      </div>
    </div>
  );
}