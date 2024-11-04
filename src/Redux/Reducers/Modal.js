import {
  TOGGLE_AUTH_MODAL,
  TOGGLE_VIDEO_MODAL,
} from '../Type';

const INITIAL = {
  isAuthModal: false,
  isLogin: "",

  isVideoModal: false,
  videoInfo: {},
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

    /**
     * Video Modal
     */
    case TOGGLE_VIDEO_MODAL: {
      const { isVideoModal, videoInfo } = action.data;
      return {
        ...state,
        isVideoModal,
        videoInfo,
      };
    }

    default:
      return state;
  }
}