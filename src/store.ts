import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { middleware as reduxPackMiddleware } from "redux-pack";
import myReducer from "./reducers/myReducer";
import StoreState from "./types/StoreState";

const store: Store<StoreState> = createStore(
  combineReducers({
    my: myReducer
  }),
  applyMiddleware(thunk, reduxPackMiddleware)
);

export default store;
