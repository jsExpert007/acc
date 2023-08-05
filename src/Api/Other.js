import { Api } from './Api';

export function* getFaq(mims_faqcategory_id) {
  const jsonData = yield Api.get(`/mimsfaqquestions?mims_faqcategory_id=${mims_faqcategory_id}`);
  return jsonData;
}
