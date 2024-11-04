import React, { useState, useEffect } from 'react';
import './style.scss';
import _ from 'lodash'
import { useSelector } from 'react-redux';
import {
  RecipesCategory,
  FilterSearch,
  RecipesDetail,
  AllRecipes,
} from 'src/Components';

export default function RecipesPage() {

  const {
    category_list
  } = useSelector(
    state => state.Category,
  );

  const [currentCategory, setCurrentCategory] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (v) => setSearchText(v);

  useEffect(() => {
    if (!_.isEmpty(category_list)) {
      setCurrentCategory(category_list[0])
    }
  }, [category_list]);

  const onSelectCategory = (info) => setCurrentCategory(info);

  return (
    <div className="recipes-page">
      {!_.isEmpty(category_list) && (
        <RecipesCategory
          currentCategory={currentCategory}
          category_list={category_list}
          onClick={onSelectCategory}
        />
      )}
      <FilterSearch
        className='filter-search'
        currentCategory={currentCategory}
        dropListInfo={category_list}
        onSelectCategory={onSelectCategory}
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
      <RecipesDetail 
        searchText={searchText}
        currentCategory={currentCategory}
      />
      <AllRecipes />
    </div>
  );
}
