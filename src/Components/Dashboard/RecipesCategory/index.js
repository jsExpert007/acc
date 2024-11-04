import React from 'react';
import './style.scss';
import { CookingCategoryItem } from 'src/Components';

export default function RecipesCategory({
  currentCategory,
  category_list,
  onClick,
}) {

  return (
    <div className='recipes-category-component'>
      <h3 className='title'>{currentCategory.category_name}</h3>
      <div className='category-list'>
        {category_list.map((item, index) => (
          <CookingCategoryItem
            key={index}
            info={item}
            id={item.category_id}
            name={item.category_name}
            logo={`${process.env.REACT_APP_IMAGE_DOMAIN}${item.category_image}`}
            selectedId={currentCategory.category_id}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}