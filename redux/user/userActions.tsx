import { Dispatch } from "redux";
import axios from "axios";
import Cookies from "js-cookie";

import { userTypes } from "redux/types";

// export const loginUserStart = () => async (dispatch: Dispatch)=> {

//   return {
//     type: userTypes.SIGN_IN_START,
//   };

// }
// export const loginUser = (data: any) => async (dispatch: Dispatch) => {
export const loginUser = (data: any) => {
  const userId = "";
  const name = data.name;
  const email = data.email;
  const image = data.image;

  return {
    type: userTypes.SIGN_IN_SUCCESS,
    userId,
    name,
    email,
    image,
  };
};

export const loginUserError = (error: any) => {
  return {
    type: userTypes.SIGN_IN_FAILURE,
    errorMessage: userTypes.errorMessage,
  };
};

export function logOut() {
  Cookies.remove("token");
  return {
    type: userTypes.LOGOUT,
  };
}
