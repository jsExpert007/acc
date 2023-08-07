import React from 'react';
import './style.scss';
import { categories } from './categories';
import { CookingCategoryItem } from 'src/Components';

export default function CookingCategory() {

  return (
    <div className='cooking-category-component'>
      {categories.map((item, index) => (
        <CookingCategoryItem
          key={index}
          info={item}
        />
      ))}
    </div>
  );
}