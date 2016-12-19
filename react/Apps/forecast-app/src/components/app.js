import React from 'react';
import { Component } from 'react';
import Navbar from './navbar.js'
import SecondBar from '../components/second_bar';
import WeatherIndex from '../containers/weather_index';
import { Router, browserHistory } from 'react-router';
import routes from '.././routes';

export default class App extends Component {
  render() {
    return (
      <div style={bg}>
        <WeatherIndex />
      </div>
    );
  }
}
const bg = {
  //fontFamily:'helvetica,arial,sans-serif',
//  backgroundColor:"white",
  borderRadius:'7px',
}
