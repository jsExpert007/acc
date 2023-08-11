import React from 'react';
import './style.scss';
import { RecipesItem } from 'src/Components';
import { categories } from './categories';

export default function TrendingCuisineList() {

  return (
    <div className='trending-cuisine-list-component'>
      <h3>Trending Cuisines</h3>
      <div className='trending-cuisines-container'>
        {categories.map((item, index) => (
          <RecipesItem 
            key={index}
            info={item}
          />
        ))}
      </div>
    </div>
  );
}