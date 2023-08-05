import {
  GET_FAQ, GET_FAQ_SUCCESS, GET_FAQ_FAIL,
} from '../Type';

const INITIAL = {
  get_faq_loading: false,
  get_faq_success: false,
  faqs: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL, action) => {
  switch (action.type) {
    /**
     * Get FAQ
     */
    case GET_FAQ: {
      return {
        ...state,
        get_faq_loading: true,
        get_faq_success: false,
      }
    }
    case GET_FAQ_FAIL: {
      return {
        ...state,
        faqs: [],
        get_faq_loading: false,
        get_faq_success: false,
      }
    }
    case GET_FAQ_SUCCESS: {
      return {
        ...state,
        faqs: action.data,
        get_faq_loading: false,
        get_faq_success: true,
      }
    }

    default:
      return state;
  }
}