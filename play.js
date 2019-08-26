import { createStore } from 'redux';
import lunchReducer from './src/reducers/lunchReducers';
import {  
  addChips, 
  removeChips,  
  addDrinks,
  removeDrinks
} from './src/actions/lunchActions';

const store = createStore(lunchReducer);
store.dispatch(addChips('potato'));
store.dispatch(removeChips('potato'));
store.dispatch(addDrinks('water'));
store.dispatch(removeDrinks('water'));
