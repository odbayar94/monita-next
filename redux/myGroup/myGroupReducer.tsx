import { userTypes } from "redux/types";
import Cookies from "js-cookie";

export const INITIAL_STATE = {
  groups: {},
};

const myGroupReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userId: action.userId,
        name: action.name,
        email: action.email,
        image: action.image,
        isLoggedIn: true,
      };
    case userTypes.LOGOUT:
      return { ...state, INITIAL_STATE };
    default:
      return state;
  }
};
export default myGroupReducer;
