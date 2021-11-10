import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import myGroupReducer from "./myGroup/myGroupReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  myGroup: myGroupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
