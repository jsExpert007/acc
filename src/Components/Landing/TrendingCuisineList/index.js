import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import _ from 'lodash'
import { RecipesItem } from 'src/Components';
import { useSelector, useDispatch } from 'react-redux';
import { showSpinner, hideSpinner } from 'src/Utils/Helper';
import { getRecipes, } from 'src/Redux/Actions';

export default function TrendingCuisineList({
  searchText = '',
  currentCategory
}) {
  const dispatch = useDispatch();

  const LoadingRef = useRef(false);

  const {
    recipes_list, get_recipes_success, get_recipes_loading
  } = useSelector(
    state => state.Recipes,
  );

  const [filterRecipes, setFilterRecipes] = useState([]);

  //Call Get Recipes
  useEffect(() => {
    showSpinner();
    dispatch(getRecipes());
  }, []);

  //Get Recipes Res
  useEffect(() => {
    if (LoadingRef.current && !get_recipes_loading) {
      hideSpinner();
      if (get_recipes_success) {
        setFilterRecipes(recipes_list);
      }
    }
    LoadingRef.current = get_recipes_loading;
  }, [dispatch, get_recipes_loading, get_recipes_success, recipes_list]);

  //Filter Recipes List
  useEffect(() => {
    const _filterSearchRecipes = recipes_list.filter(
      item => item?.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
    );
    const _filterCategoryRecipes = _filterSearchRecipes.filter(
      item => item?.category.id === currentCategory?.category_id
    );
    setFilterRecipes(
      currentCategory.category_id === 0 ? _filterSearchRecipes : _filterCategoryRecipes
    )
  }, [searchText, currentCategory]);

  return (
    <div className='trending-cuisine-list-component'>
      <h3>Trending Cuisines</h3>
      <div className='trending-cuisines-container'>
        {!_.isEmpty(filterRecipes) ?
          filterRecipes.map((item, index) => (
            <RecipesItem
              key={index}
              info={item}
            />
          )) : (
            <div className='not-result'>Not Result</div>
          )
        }
      </div>
    </div>
  );
}