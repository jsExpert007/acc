import { 
  SIGN_IN,
  FORGOT_PASSWORD,
  SIGN_UP,
} from '../Type';

export const signIn = (data) => {
  return {
    type: SIGN_IN,
    data
  }
}

export const studentSignUP = (data) => {
  return {
    type: SIGN_UP,
    data
  }
}

export const forgotPassword = (data) => {
  return {
    type: FORGOT_PASSWORD,
    data
  }
}
