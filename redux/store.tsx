import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";

import userReducer from "./user/userReducer";
import myGroupReducer from "./myGroup/myGroupReducer";

export const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  //   middlewares.push(logger);
}

const rootReducer = combineReducers({
  userReducer,
  myGroupReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
