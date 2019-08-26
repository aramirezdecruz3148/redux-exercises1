import { 
  ADD_CHIPS, 
  REMOVE_CHIPS, 
  ADD_DRINKS, 
  REMOVE_DRINKS,
} from '../actions/lunchActions';

const initialState = {
  chips: [],
  drinks: []
};


export function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CHIPS:
      return { ...state, chips: [...state.drinks, action.payload] };
    case REMOVE_CHIPS:
      return { ...state, chips: state.chips.filter(c => c !== action.payload) };
    case ADD_DRINKS:
      return { ...state, drinks: [...state.drinks, action.payload] };
    case REMOVE_DRINKS:
      return { ...state, drinks: state.drinks.filter(d => d !== action.payload) };
    default:
      return state;
  }
}