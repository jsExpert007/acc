import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { categories } from './categories';
import { CookingCategoryItem } from 'src/Components';
import { showToast } from 'src/Utils/Helper';

export default function CookingCategory({
  isLanding
}) {
  const navigate = useNavigate();

  const onCookingCategory = (info) => {
    if (isLanding) {
      showToast("error", 3000, "Please Login!")
    } else {
      navigate(`/dashboard/${info.link}`)
    }
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