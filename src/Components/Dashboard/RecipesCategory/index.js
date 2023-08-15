import React from 'react';
import './style.scss';
import { CookingCategoryItem } from 'src/Components';
import { RecipesCategories } from 'src/Constant';

export default function RecipesCategory({
  currentRecipes,
  onClick,
}) {

  return (
    <div className='recipes-category-component'>
      <h3 className='title'>{currentRecipes.name}</h3>
      <div className='category-list'>
        {RecipesCategories.map((item, index) => (
          item.id !== "0" &&
          <CookingCategoryItem
            key={index}
            info={item}
            selectedId={currentRecipes.id}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}