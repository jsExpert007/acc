import {
  GET_CATEGORIES, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS,
} from '../Type';

const INITIAL = {
  category_list: [],
  get_category_loading: false,
  get_category_success: true,

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL, action) => {
  switch (action.type) {
    /**
     * Get Category
    */
    case GET_CATEGORIES: {
      return {
        ...state,
        category_list: [],
        get_category_loading: true,
        get_category_success: false,
      }
    }
    case GET_CATEGORIES_FAIL: {
      return {
        ...state,
        category_list: [],
        get_category_loading: false,
        get_category_success: false,
      }
    }
    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        category_list: action.data,
        get_category_loading: false,
        get_category_success: true,
      }
    }



    default:
      return state;
  }
}