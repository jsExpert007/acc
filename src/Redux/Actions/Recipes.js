import {
  GET_RECIPES,
  CREATE_RECIPE,
} from '../Type';

export const getRecipes = () => {
  return {
    type: GET_RECIPES,
  }
}

export const createRecipe = (data) => {
  return {
    type: CREATE_RECIPE,
    data
  }
}