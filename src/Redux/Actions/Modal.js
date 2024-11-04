import {
  TOGGLE_AUTH_MODAL,
  TOGGLE_VIDEO_MODAL,
} from '../Type';

export const toggleAuthModal = (isAuthModal, isLogin = false) => {
  return {
    type: TOGGLE_AUTH_MODAL,
    data: { isAuthModal, isLogin }
  }
}

export const toggleVideoModal = (isVideoModal, videoInfo) => {
  return {
    type: TOGGLE_VIDEO_MODAL,
    data: { isVideoModal, videoInfo }
  }
}