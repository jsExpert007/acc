import React, { useState } from 'react';
import './style.scss';
import HeadImg from 'src/Assets/Images/Dashboard/CreateRecipes/create-recipes-bg.png';
import { AddRecipesTime, ContinueBtn } from 'src/Components';
import RecipesNameType from './RecipesNameType';
import RecipesDetails from './RecipesDetails';
import UploadMedia from './UploadMedia';

export default function CreateRecipesPage() {

  const [recipesInfo, setRecipesInfo] = useState({
    recipeName: '',
    ingredients: '',
    subtitles: '',
    steps: '',
    about: '',
    nutrition: '',
    tag: '',
    tools: '',
    notes: '',
    media: '',
  });

  const onChangeRecipes = (field, value) => {
    setRecipesInfo({
      ...recipesInfo,
      [field]: value,
    });
  };

  const onSubmit = () => {

  };

  return (
    <div className="create-recipes-page">
      <h3>Create Recipes</h3>
      <img src={HeadImg} alt='head-img' className='head-img' />
      <RecipesNameType
        recipesInfo={recipesInfo}
        onChangeRecipes={onChangeRecipes}
      />
      <RecipesDetails
        recipesInfo={recipesInfo}
        onChangeRecipes={onChangeRecipes}
      />
      <UploadMedia
        onChangeRecipes={onChangeRecipes}
      />
      <AddRecipesTime />
      <ContinueBtn
        btnText='Submit'
        className='submit-btn mx-auto btn-shadow'
        onClick={onSubmit}
      />
    </div>
  );
}
