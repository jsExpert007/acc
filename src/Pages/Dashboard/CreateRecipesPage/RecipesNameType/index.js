import React from 'react';
import './style.scss';
import HotScale from 'src/Assets/Images/Dashboard/CreateRecipes/hot-scale.svg';
import TypeIcon from 'src/Assets/Images/Dashboard/CreateRecipes/type-icon.svg';


export default function RecipesNameType({
  recipesInfo,
  onChangeRecipes
}) {

  return (
    <div className="recipes-name-type-component">
      <div className='container recipes-name-container'>
        <div className='name-content'>
          <div className='name'>Recipe Name: </div>
          <input
            className={`name-input`}
            value={recipesInfo.recipeName}
            onChange={e => onChangeRecipes('recipeName', e.currentTarget.value)}
          />
        </div>
        <div className='type-content'>
          <img src={HotScale} alt='hot-scale' className='hot-scale' />
          <div className='v-c recipe-info-content'>
            <div className='recipe-info'>Recipe Info:</div>
            <div className='help-content center'>?</div>
          </div>
          <div className='v-c'>
            <img src={TypeIcon} alt='type-icon' className='type-icon' />
            <div className='recipe-type'>Recipe Type</div>
          </div>
        </div>
      </div>
    </div>
  );
}
