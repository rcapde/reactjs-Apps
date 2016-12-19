import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}`;
//const RELATED = `http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=${API_KEY}`;
//const RELATED = `http://api.openweathermap.org/data/2.5/find?appid=6a78596d062df78380eff5944c4e5567&lat=55.5&lon=37.5&cnt=10`;

const RELATED = `http://api.openweathermap.org/data/2.5/find?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const RELATED_WEATHER = 'RELATED_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&cnt=10&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function fetchRelated() {
  //const related_url = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5`;

  const related_url = `${RELATED}&lat=55.5&lon=37.5&cnt=10`;
  const request = axios.get(related_url);

  return {
    type: RELATED_WEATHER,
    payload: request
  };
}
