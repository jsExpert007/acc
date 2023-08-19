import React, { useEffect, useState, useRef } from 'react';
import './style.scss';
import _ from 'lodash'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import HeadImg from 'src/Assets/Images/Dashboard/CreateRecipes/create-recipes-bg.png';
import { AddRecipesTime, ContinueBtn } from 'src/Components';
import RecipesNameType from './RecipesNameType';
import RecipesDetails from './RecipesDetails';
import UploadMedia from './UploadMedia';
import { showSpinner, hideSpinner, showToast } from 'src/Utils/Helper';
import { createRecipe, } from 'src/Redux/Actions';

export default function CreateRecipesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { category_id } = useParams();

  const LoadingRef = useRef(false);

  const {
    category_list
   } = useSelector(
     state => state.Category,
   );

  const {
    create_recipe_res, create_recipe_success, create_recipe_loading
  } = useSelector(
    state => state.Recipes,
  );

  //Create Recipe Res
  useEffect(() => {
    if (LoadingRef.current && !create_recipe_loading) {
      hideSpinner();
      if (create_recipe_success) {
        showToast('success', 3000, create_recipe_res);
        navigate('/dashboard');
      } else {
        showToast('error', 3000, create_recipe_res)
      }
    }
    LoadingRef.current = create_recipe_loading;
  }, [dispatch, create_recipe_loading, create_recipe_success, create_recipe_res]);

  useEffect(() => {
    if (!_.isEmpty(category_list)) {
        const _subCategories = category_list.find((e) => e.category_id === Number(category_id))?.sub_categories || [];
        setSubCategories(_subCategories);
    }
  }, [category_list]);

  const [subCategories, setSubCategories] = useState([]);

    const [recipesInfo, setRecipesInfo] = useState({
    recipeName: 'test',
    recipe_type_id: "",
    ingredients: 'test',
    subtitles: 'test',
    steps: 'test',
    about: 'test',
    nutrition: 'test',
    tag: 'test',
    tools: 'test',
    notes: 'test',
    media: '',
  });

  const onChangeRecipes = (field, value) => {
    setRecipesInfo({
      ...recipesInfo,
      [field]: value,
    });
  };

  const onSubmit = () => {
    showSpinner();
    const formData = new FormData()
    formData.append('category_id', category_id);
    formData.append('recipe_type_id', recipesInfo.recipe_type_id);
    formData.append('name', recipesInfo.recipeName);
    formData.append('ingredients', recipesInfo.ingredients);
    formData.append('subtitles', recipesInfo.subtitles);
    formData.append('steps', recipesInfo.steps);
    formData.append('about', recipesInfo.about);
    formData.append('nutrition', recipesInfo.nutrition);
    formData.append('tag', recipesInfo.tag);
    formData.append('tools', recipesInfo.tools);
    formData.append('media', recipesInfo.media);
    formData.append('notes', recipesInfo.notes);
    dispatch(createRecipe(formData));
  };

  const getDisableBtn = () => {
    for (var key in recipesInfo) {
      if (recipesInfo[key] === "") {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="create-recipes-page">
      {console.log("===subCategories===", subCategories)}
      <h3>Create Recipes</h3>
      <img src={HeadImg} alt='head-img' className='head-img' />
      <RecipesNameType
        recipesInfo={recipesInfo}
        onChangeRecipes={onChangeRecipes}
      />
      <RecipesDetails
        subCategories={subCategories}
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
        isDisable={getDisableBtn()}
        onClick={onSubmit}
      />
    </div>
  );
}
