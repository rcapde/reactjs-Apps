import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './containers/home';
import App from './components/app';
import WeatherIndex from './containers/weather_index';
export default (
  <Route path="/" component={WeatherIndex}>
    <IndexRoute component={WeatherIndex} />
  </Route>
);

//DEPRECATED COMPONENT
