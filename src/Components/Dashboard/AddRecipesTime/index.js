import React from 'react';
import './style.scss';
import MoreItem from './MoreItem';

export default function AddRecipesTime() {

  return (
    <div className="add-recipes-time-component">
      <MoreItem
        title={'Prep time'}
        description={'25 mins'}
      />
      <MoreItem
        title={'Cooking time'}
        description={'25 mins'}
      />
      <MoreItem
        title={'Serves'}
        description={'2'}
      />
      <MoreItem
        title={'Difficulty'}
        description={'Easy'}
      />
    </div>
  );
}
