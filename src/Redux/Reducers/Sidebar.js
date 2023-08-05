import {
  TOGGLE_SIDE_BAR,
} from '../Type';

const INITIAL = {
  isSideBar: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL, action) => {
  switch (action.type) {
    /**
     * Sidebar of the Main Dashboard
     */
    case TOGGLE_SIDE_BAR: {
      const { isSideBar } = action.data;
      return { ...state, isSideBar };
    }

    default:
      return state;
  }
};



