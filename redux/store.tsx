import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";

import userReducer from "./user/userReducer";
import groupReducer from "./group/groupReducer";

export const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  //   middlewares.push(logger);
}

const rootReducer = combineReducers({
  userReducer,
  groupReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
