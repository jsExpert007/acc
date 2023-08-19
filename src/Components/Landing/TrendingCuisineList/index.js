import React, { useEffect, useRef } from 'react';
import './style.scss';
import _ from 'lodash'
import { RecipesItem } from 'src/Components';
import { useSelector, useDispatch } from 'react-redux';
import { showSpinner, hideSpinner } from 'src/Utils/Helper';
import { getRecipes, } from 'src/Redux/Actions';

export default function TrendingCuisineList() {
  const dispatch = useDispatch();

  const LoadingRef = useRef(false);

  const {
    recipes_list, get_recipes_success, get_recipes_loading
  } = useSelector(
    state => state.Recipes,
  );

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

      }
    }
    LoadingRef.current = get_recipes_loading;
  }, [dispatch, get_recipes_loading, get_recipes_success, recipes_list]);

  return (
    <div className='trending-cuisine-list-component'>
      <h3>Trending Cuisines</h3>
      <div className='trending-cuisines-container'>
        {!_.isEmpty(recipes_list) ?
          recipes_list.map((item, index) => (
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