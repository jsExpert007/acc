import React from 'react';
import './style.scss';
import _ from 'lodash'
import { useSelector } from 'react-redux';
import {
  RecipesItem,
} from 'src/Components';

export default function AllRecipes() {

  const {
    recipes_list
  } = useSelector(
    state => state.Recipes,
  );

  return (
    <div className='all-recipes-component'>
      <div className='all-recipes-container'>
        <div className='title'>All Recipe's</div>
        <div className='week-food-list'>
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
    </div>
  );
}