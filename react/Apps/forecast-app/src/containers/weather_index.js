import React, { Component } from 'react';
import { connect } from 'react-redux';
import Favorite from '../components/favorite';
import _ from "lodash";
import dateFormat from 'dateformat';
import SecondBar from '../components/second_bar';
import Home from './home';
import {Link} from 'react-router';
import Navbar from '../components/navbar';
import WeatherToday from '../containers/weather_today';
import Forecast5 from '../containers/forecast5';
import Forecast10 from '../containers/forecast10';
import Related from '../containers/related';
import {fetchRelated} from '../actions/index';

class WeatherIndex extends React.Component{
  constructor() {
    super();
    this.state = {
      page: 'today'
    };
  };
  onClick(){
    this.setState({ page: 'today' })
  }
  onClick2(){
    this.setState({ page: 'forecast5' })
  }
  onClick3(){
    this.setState({ page: 'forecast10'})
  }
  render(){
    if(!this.props.weather){
      return(
        <Home />
      );
    }
    const lon = this.props.weather.city.coord.lon;
    const lat = this.props.weather.city.coord.lat;

    const itemlist10 = this.props.weather.list.map(list => list)

    //slicing the array to get 5 results instead of 10
    const itemlist = this.props.weather.list.map(list => list)
    const itemlist5 = itemlist.slice(0,5);

    const todaylist = this.props.weather.list[0];
    const tomorrowlist = this.props.weather.list[1];

    const todayIcon = this.props.weather.list[0].weather[0].icon;
    //const tonightIcon = this.props.weather.list[0].weather[0].icon;
    const tomorrowIcon = this.props.weather.list[1].weather[0].icon;

    let code = <WeatherToday
                todayIcon={`../../images/icones/nit/${todayIcon}.png`} todaylist={todaylist}
                tonightIcon={`../../images/icones/nit/${todayIcon}.png`}
                tomorrowIcon={`../../images/icones/${tomorrowIcon}.png`} tomorrowlist={tomorrowlist}
                />;

    if(this.state.page=='forecast10'){
      code = <Forecast10 itemlist10={itemlist10} />
    }
    if(this.state.page=='today'){
      code =  <WeatherToday
                  todayIcon={`../../images/icones/${todayIcon}.png`} todaylist={todaylist}
                  tonightIcon={`../../images/icones/nit/${todayIcon}.png`}
                  tomorrowIcon={`../../images/icones/${tomorrowIcon}.png`} tomorrowlist={tomorrowlist}
                  />;

    }
    if(this.state.page=='forecast5'){
      code = <Forecast5 itemlist5={itemlist5} />;
    }


    const city = this.props.weather.city.name

    return(
      <div>
        <Navbar />
        <SecondBar city={city} />
        <ul className="nav nav-tabs" style={trimenu}>
          <li className="nav-item" onClick={this.onClick.bind(this)}><a>Today Weather</a></li>
          <li className="nav-item" onClick={this.onClick2.bind(this)}><a>5 day Forecast</a></li>
          <li className="nav-item" onClick={this.onClick3.bind(this)}><a>10 day Forecast</a></li>
        </ul>
        <div style={bg}>
          {code}
        </div>
      </div>
    );
  }
}
const bg={
  color: 'white',
  marginTop:'-20px',

}
const trimenu={
  backgroundColor:'white',
  marginTop:'-20px',
}
function mapStateToProps(state) {
  return {
    weather: state.weather.data,
  };
}


export default connect(mapStateToProps)(WeatherIndex);
