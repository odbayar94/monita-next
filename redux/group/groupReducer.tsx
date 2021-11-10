import { groupTypes } from "redux/types";
import { IGroupState } from "interfaces";

export const INITIAL_STATE: IGroupState = {
  isLoaded: false,
  groups: [],
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
