import { combineReducers } from 'redux';
import Scores from './scores-rd';

const rootReducer = combineReducers({
  scores: Scores,
});

export default rootReducer;
