import GraphistError from './GraphistError';
import MyPackValue from './MyPackValue';

interface MyState {
  myValue: string | null;
  packLoading: boolean;
  packError: GraphistError | null;
  packValue: MyPackValue | null;
  thunkValue: string | null;
}

export default MyState;
