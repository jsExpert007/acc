import {
  SIGN_IN, SIGN_IN_FAIL, SIGN_IN_SUCCESS,
  FORGOT_PASSWORD, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_SUCCESS,
  SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS,
} from '../Type';

const INITIAL = {
  user: null,
  token: null,
  login_res: "",
  login_success: false,
  login_loading: false,

  forgotPass_res: '',
  forgotPass_loading: false,
  forgotPass_success: true,

  signUp_res: "",
  signUp_success: false,
  signUp_loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL, action) => {
  switch (action.type) {
    /**
     * Sign In
    */
    case SIGN_IN: {
      return {
        ...state,
        login_loading: true,
        login_success: false,
      }
    }
    case SIGN_IN_FAIL: {
      return {
        ...state,
        user: null,
        token: null,
        login_res: action.message,
        login_loading: false,
        login_success: false,
      }
    }
    case SIGN_IN_SUCCESS: {
      const { token, user } = action.data;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      return {
        ...state,
        user,
        token,
        login_res: action.message,
        login_loading: false,
        login_success: true,
      }
    }

    /**
     * Forgot Password
    */
    case FORGOT_PASSWORD: {
      return {
        ...state,
        forgotPass_loading: true,
        forgotPass_success: false,
      }
    }
    case FORGOT_PASSWORD_FAIL: {
      const { error } = action.data;
      console.log("error", error)
      return {
        ...state,
        forgotPass_res: error,
        forgotPass_loading: false,
        forgotPass_success: false,
      }
    }
    case FORGOT_PASSWORD_SUCCESS: {
      const { message } = action.data;
      return {
        ...state,
        forgotPass_res: message,
        forgotPass_loading: false,
        forgotPass_success: true,
      }
    }

    /**
     * Student Sign Up
    */
    case SIGN_UP: {
      return {
        ...state,
        signUp_loading: true,
        signUp_success: false,
      }
    }
    case SIGN_UP_FAIL: {
      const { errors, message } = action.data;
      console.log("error", errors)
      return {
        ...state,
        user: null,
        token: null,
        signUp_res: errors.email.toString() || message,
        signUp_loading: false,
        signUp_success: false,
      }
    }
    case SIGN_UP_SUCCESS: {
      const { token, user } = action.data;
      console.log("token", token)
      console.log("user", user)

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      return {
        ...state,
        user,
        token,
        signUp_res: 'Successfully Sign Up!',
        signUp_loading: false,
        signUp_success: true,
      }
    }

    default:
      return state;
  }
}