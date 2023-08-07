import {
  TOGGLE_AUTH_MODAL,
} from '../Type';

export const toggleAuthModal = (isAuthModal, isLogin = false) => {
  return {
    type: TOGGLE_AUTH_MODAL,
    data: { isAuthModal, isLogin }
  }
}