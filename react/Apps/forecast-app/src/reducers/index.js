import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import RelatedWeather from './related_reducer';
const rootReducer = combineReducers({
  weather: WeatherReducer,
  related: RelatedWeather,
});

export default rootReducer;
