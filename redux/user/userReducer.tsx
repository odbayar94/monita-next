import userTypes from './userTypes';
import Cookies from "js-cookie";

// state = {
//   isLoggedIn: false,
//   userID: "",
//   name: "",
//   email: "",
//   picture: "",
// };
export const INITIAL_STATE = {
  error: false,
  isLoading: false,
  errorMessage: "",

  isLoggedIn: false,
  userID: "",
  name: "",
  email: "",
  picture: "",
  token: Cookies.get("token"),
  };
  
const userReducer = (state=INITIAL_STATE, action: any) => {
    switch (action.type) {
        case userTypes.SIGN_IN_START:
            return {...state, isLoading: true}
        case userTypes.SIGN_IN_SUCCESS:
            return {...state, isLoading: false, userID: action.userID, name: action.name, email: action.email, picture: action.picture, isLoggedIn: true}
        case userTypes.SIGN_IN_FAILURE:
          return {...state, isLoading: false, error: true, errorMessage: action.errorMessage}
        case userTypes.LOGOUT:
          return {...state, INITIAL_STATE}
        default:
          return state;
    }
  }
  export default userReducer;
