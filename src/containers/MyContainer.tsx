import { connect } from 'react-redux';
import {
  createMyStandardAction,
  createMyPackAction,
  createMyThunkAction,
} from '../actions/actionCreators';
import StoreState from '../types/StoreState';
import MyComponent from '../components/MyComponent';

function mapStateToProps(state: StoreState) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    createMyStandardAction,
    createMyPackAction,
    createMyThunkAction,
  }
)(MyComponent);
