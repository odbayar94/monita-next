// import { groupTypes } from "redux/types";
// import Cookies from "js-cookie";

// export const INITIAL_STATE = {
//   isLoading: true,
//   groups: [],
// };

// const groupReducer = (state = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case groupTypes.LOAD_START:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case groupTypes.LOAD_SUCCESS:
//       return { ...state, groups: action.groups, isLoading: false };
//     case groupTypes.LOAD_FAILURE:
//       return { ...state, INITIAL_STATE };
//     default:
//       return state;
//   }
// };
// export default groupReducer;
import { groupTypes } from "redux/types";

export const INITIAL_STATE = {
  isLoaded: false,
};

const groupReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case groupTypes.LOAD_START:
      return {
        ...state,
        isLoaded: false,
      };
    case groupTypes.LOAD_SUCCESS:
      return { ...state, groups: action.groups, isLoaded: true };
    case groupTypes.LOAD_FAILURE:
      return {
        ...state,
        isLoaded: false,
      };
    case groupTypes.STOP:
      return {
        state: INITIAL_STATE,
      };
    default:
      return state;
  }
};
export default groupReducer;
