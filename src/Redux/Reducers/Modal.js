import {
  TOGGLE_AUTH_MODAL,
} from '../Type';

const INITIAL = {
  isAuthModal: false,
  isLogin: "",
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL, action) => {
  switch (action.type) {
    /**
     * Auth Modal
     */
    case TOGGLE_AUTH_MODAL: {
      const { isAuthModal, isLogin } = action.data;
      return {
        ...state,
        isAuthModal,
        isLogin
      };
    }

    default:
      return state;
  }
}