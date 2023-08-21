import React, { useEffect, useState } from 'react';
import './style.scss';
import { FoodItem } from 'src/Components';
import { categories } from './categories';

export default function RecipesList({
  searchText = '',
  currentCategory
}) {

  const [filterFoodList, setFilterFoodList] = useState([]);

  //Filter Recipes List
  useEffect(() => {
    const _filterSearchRecipes = categories.filter(
      item => item?.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
    );
    const _filterCategoryRecipes = _filterSearchRecipes.filter(
      item => item?.category.id === currentCategory?.category_id
    );
    setFilterFoodList(_filterCategoryRecipes)
  }, [searchText, currentCategory]);

  return (
    <div className='recipes-list-component'>
      <div className='recipes-list-container'>
        {filterFoodList.map((item, index) => (
          <FoodItem
            key={index}
            info={item}
          />
        ))}
      </div>
    </div>
  );
}