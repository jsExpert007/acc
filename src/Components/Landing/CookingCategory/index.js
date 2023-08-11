import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { categories } from './categories';
import { CookingCategoryItem } from 'src/Components';

export default function CookingCategory() {
  const navigate = useNavigate();

  const onCookingCategory = () => {
    navigate('/dashboard/recipes')
  }

  return (
    <div className='cooking-category-component'>
      {categories.map((item, index) => (
        <CookingCategoryItem
          key={index}
          info={item}
          onClick={onCookingCategory}
        />
      ))}
    </div>
  );
}