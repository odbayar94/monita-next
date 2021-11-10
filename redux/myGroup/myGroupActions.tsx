import { Dispatch } from "redux";
import axios from "axios";
import Cookies from "js-cookie";

import { myGroupTypes } from "redux/types";

export const myGroup = (email: string) => async (dispatch: Dispatch) => {
  dispatch(myGroupStart());

  axios
    .get(process.env.REST_API + "/users/login" + email)
    .then((result) => {
      Cookies.set("token", result.data.user.token);

      dispatch(myGroupSuccess(result));
    })
    .catch((err) => {
      if (!err.response) {
        const error = {
          response: {
            data: {
              error: {
                message: "Сервертэй холбогдоход алдаа гарлаа",
              },
            },
          },
        };

        dispatch(myGroupError(error));
      } else {
        dispatch(myGroupError(err));
      }
    });
};

export const myGroupStart = () => {
  return {
    type: myGroupTypes.LOAD_START,
  };
};

export const myGroupSuccess = (group) => {
  return {
    type: myGroupTypes.LOAD_SUCCESS,
    group,
  };
};

export const myGroupError = (error: any) => {
  return {
    type: myGroupTypes.LOAD_FAILURE,
    errorMessage: error.response.data.error.message,
  };
};
