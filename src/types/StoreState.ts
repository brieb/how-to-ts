/*
 * In TS, we explicitly annotate the shape of our store.
 * 
 * This helps us and future developers know what is contained
 * in the store vs having to grep around for usages or rely
 * on the Redux DevTools.
 * 
 * The root-level state is composed of state for the store's reducers.
 */
import MyState from './MyState';

interface StoreState {
  my: MyState;
}

export default StoreState;
