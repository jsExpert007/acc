import React, { useState } from 'react';
import './style.scss';
import { RecipesCategories } from 'src/Constant';
import {
  RecipesCategory,
  FilterSearch,
  RecipesDetail,
  AllRecipes,
} from 'src/Components';

export default function RecipesPage() {

  const [currentRecipes, setCurrentRecipes] = useState(RecipesCategories[1]);

  const onSelectCategory = (info) => setCurrentRecipes(info);

  return (
    <div className="recipes-page">
      <RecipesCategory
        currentRecipes={currentRecipes}
        onClick={onSelectCategory}
      />
      <FilterSearch
        className='filter-search'
        category={currentRecipes}
        dropListInfo={RecipesCategories.slice(1)}
        onSelectCategory={onSelectCategory}
      />
      <RecipesDetail />
      <AllRecipes />
    </div>
  );
}
