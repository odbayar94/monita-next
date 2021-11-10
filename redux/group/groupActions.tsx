import { Dispatch } from "redux";
import axios from "axios";
import Cookies from "js-cookie";

import { groupTypes } from "redux/types";

export const group = (email: string) => (dispatch: any) => {
  dispatch(groupStart());

  axios
    .get("http://localhost:5000/api/v1/monitas/my/" + email)
    .then((result) => {
      // Cookies.set("token", result.data.user.token);
      dispatch(groupSuccess(result.data.data));
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

        dispatch(groupError(error));
      } else {
        dispatch(groupError(err));
      }
    });
};

export const groupStart = () => {
  return {
    type: groupTypes.LOAD_START,
  };
};

export const groupSuccess = (groups: Array<Object>) => {
  return {
    type: groupTypes.LOAD_SUCCESS,
    groups,
  };
};

export const groupStop = () => {
  return {
    type: groupTypes.STOP,
  };
};

export const groupError = (error: any) => {
  return {
    type: groupTypes.LOAD_FAILURE,
    errorMessage: error.response.data.error.message,
  };
};
