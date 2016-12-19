import { combineReducers } from 'redux';
import FlightsReducer from './flights_reducer';


const rootReducer = combineReducers({
  flights: FlightsReducer,
});

export default rootReducer;
