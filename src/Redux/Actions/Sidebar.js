import { TOGGLE_SIDE_BAR } from '../Type';

export const toggleSideBar = (isSideBar) => {
  return {
    type: TOGGLE_SIDE_BAR,
    data: { isSideBar }
  }
}