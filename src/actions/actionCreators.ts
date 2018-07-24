import { Dispatch } from 'redux';
import {
  MY_STANDARD_ACTION,
  MY_PACK_ACTION,
  MY_THUNK_ACTION,
} from './actionTypes';
import fetchMyData from '../api/fetchMyData';
import StoreState from '../types/StoreState';

// Standard action creator
export function createMyStandardAction(myValue: string) {
  return { type: MY_STANDARD_ACTION, payload: { myValue } };
}

// Redux pack action creator
export function createMyPackAction() {
  return { type: MY_PACK_ACTION, promise: fetchMyData() };
}

// Redux thunk action creator
interface MyThunkAction {
  type: typeof MY_THUNK_ACTION;
  payload: { thunkValue: string };
}

export function createMyThunkAction() {
  return (dispatch: Dispatch, getState: () => StoreState) => {
    const {
      my: { myValue: thunkValue },
    } = getState();
    const action: MyThunkAction = {
      type: MY_THUNK_ACTION,
      payload: { thunkValue },
    };
    dispatch(action);
  };
}

// The built-in `ReturnType` utility allows us to infer the return type
// without having to declare it explicitly.
export type MyAction =
  | ReturnType<typeof createMyStandardAction>
  | ReturnType<typeof createMyPackAction>
  | MyThunkAction;
