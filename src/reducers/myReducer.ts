import { handle } from 'redux-pack';
import MyState from '../types/MyState';
import { MyAction } from '../actions/actionCreators';
import {
  MY_STANDARD_ACTION,
  MY_PACK_ACTION,
  MY_THUNK_ACTION,
} from '../actions/actionTypes';
import GraphistError from '../types/GraphistError';
import MyPackValue from '../types/MyPackValue';

const INITIAL_STATE: MyState = {
  myValue: null,
  packLoading: false,
  packError: null,
  packValue: null,
  thunkValue: null,
};

export default function myReducer(
  state: MyState = INITIAL_STATE,
  action: MyAction
): MyState {
  switch (action.type) {
    case MY_STANDARD_ACTION: {
      const { myValue } = action.payload;
      return { ...state, myValue };
    }
    case MY_PACK_ACTION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          packLoading: true,
          packError: null,
        }),
        finish: prevState => ({
          ...prevState,
          packLoading: false,
        }),
        failure: (prevState, { payload }: { payload: GraphistError }) => ({
          ...prevState,
          packError: payload,
        }),
        success: (prevState, { payload }: { payload: MyPackValue }) => ({
          ...prevState,
          packValue: payload,
        }),
      });
    case MY_THUNK_ACTION: {
      const { thunkValue } = action.payload;
      return { ...state, thunkValue };
    }
    default:
      return state;
  }
}
