import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { categories } from './categories';
import { CookingCategoryItem } from 'src/Components';
import { showToast } from 'src/Utils/Helper';
import AddRecipesPopUp from './AddRecipesPopUp';

export default function CookingCategory({
  isLanding
}) {
  const navigate = useNavigate();

  const [isAddRecipes, setIsAddRecipes] = useState(false)

  const onCookingCategory = (info) => {
    if (isLanding) {
      showToast("error", 3000, "Please Login!")
    } else {
      if (info.link) {
        navigate(`/dashboard/${info.link}`)
      } else {
        setIsAddRecipes(true);
      }
    }
  };

  const onAddRecipes = (info) => {
    setIsAddRecipes(false);
    // navigate(`/dashboard/add-recipes/add_id/${info.id}`)
    navigate(`/dashboard/create-recipes/category_id/${info.category_id}`)
  }

  const onCloseAddRecipe = () => {
    setIsAddRecipes(false);
  }

  return (
    <div className='cooking-category-component'>
      {categories.map((item, index) => (
        <div className='category-item' key={index}>
          <CookingCategoryItem
            info={item}
            id={item.id}
            name={item.name}
            logo={item.logo}
            onClick={onCookingCategory}
          />
          {(isAddRecipes && item.id === "3") && (
            <AddRecipesPopUp 
              className='add-recipe-pop-up'
              onClose={onCloseAddRecipe}
              onClick={onAddRecipes}
            />
          )}
        </div>
      ))}
    </div>
  );
}