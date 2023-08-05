import {
  GET_FAQ,
} from '../Type';

export const getFaq = (mims_faqcategory_id) => {
  return {
    type: GET_FAQ,
    data: { mims_faqcategory_id }
  }
}
