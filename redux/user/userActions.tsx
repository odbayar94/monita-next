import { Dispatch } from 'redux';
import axios from "axios";
import Cookies from "js-cookie";


import userTypes from './userTypes';

export const loginUserStart = () => async (dispatch: Dispatch)=> {
    
  return {
    type: userTypes.SIGN_IN_START,
  };
    
}

  export const loginUserSuccess = (response: any) => {
  const userID =  response.userID;
  const name =  response.name;
  const email =  response.email;
  const picture =  response.picture.data.url;

    return {
      type: userTypes.SIGN_IN_SUCCESS,
      userID,
      name,
      email,
      picture
    };
  };
  
  export const loginUserError = (error: any) => {
    return {
      type: userTypes.SIGN_IN_FAILURE,
      errorMessage: userTypes.errorMessage,
    };
  };  


  export function logOut (){
   Cookies.remove("token");
    return {
      type: userTypes.LOGOUT,
    };
  };