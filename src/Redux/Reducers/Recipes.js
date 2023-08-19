import {
  GET_RECIPES, GET_RECIPES_FAIL, GET_RECIPES_SUCCESS,
  CREATE_RECIPE, CREATE_RECIPE_FAIL, CREATE_RECIPE_SUCCESS,
} from '../Type';

const INITIAL = {
  recipes_list: [],
  get_recipes_loading: false,
  get_recipes_success: true,

  create_recipe_res: '',
  create_recipe_loading: false,
  create_recipe_success: true,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL, action) => {
  switch (action.type) {
    /**
     * Get Recipes
    */
    case GET_RECIPES: {
      return {
        ...state,
        get_recipes_loading: true,
        get_recipes_success: false,
      }
    }
    case GET_RECIPES_FAIL: {
      return {
        ...state,
        recipes_list: [],
        get_recipes_loading: false,
        get_recipes_success: false,
      }
    }
    case GET_RECIPES_SUCCESS: {
      return {
        ...state,
        recipes_list: action.data.recipes,
        get_recipes_loading: false,
        get_recipes_success: true,
      }
    }

    /**
     * Create Recipe
    */
    case CREATE_RECIPE: {
      return {
        ...state,
        create_recipe_loading: true,
        create_recipe_success: false,
      }
    }
    case CREATE_RECIPE_FAIL: {
      return {
        ...state,
        create_recipe_res: action.data.message,
        create_recipe_loading: false,
        create_recipe_success: false,
      }
    }
    case CREATE_RECIPE_SUCCESS: {
      return {
        ...state,
        create_recipe_res: action.data.message,
        create_recipe_loading: false,
        create_recipe_success: true,
      }
    }


    default:
      return state;
  }
}