import { myGroupTypes } from "redux/types";
import Cookies from "js-cookie";

export const INITIAL_STATE = {
  groups: {},
};

const myGroupReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case myGroupTypes.LOAD_START:
      return {
        ...state,
        isLoading: false,
        userId: action.userId,
        name: action.name,
        email: action.email,
        image: action.image,
        isLoggedIn: true,
      };
    case myGroupTypes.LOAD_SUCCESS:
      return { ...state, INITIAL_STATE };
    case myGroupTypes.LOAD_FAILURE:
      return { ...state, INITIAL_STATE };
    default:
      return state;
  }
};
export default myGroupReducer;
