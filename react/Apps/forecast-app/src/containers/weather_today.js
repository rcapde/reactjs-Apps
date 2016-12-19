import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import dateFormat from 'dateformat';
import {Link} from 'react-router';

export default function WeatherToday (props){

    const today = props.todaylist;
    const tomorrow = props.tomorrowlist;

    return(
      <table style={table} >
        <thead>
          <tr style={head}>
            <th style={thstyle}>Today</th>
            <th style={thstyle}>Tonight</th>
            <th style={thstyle}>Tomorrow</th>
          </tr>
        </thead>
        <tbody>
          <tr style={imgrow}>
            <th style={thstyle}><img style={icon} src={props.todayIcon}/></th>
            <th style={thstyle}><img style={icon} src={props.tonightIcon}/></th>
            <th style={thstyle}><img style={icon} src={props.tomorrowIcon}/></th>
          </tr>
          <tr style={temprow}>
            <th style={thstyle}>{Number((today.temp.day).toFixed(0))}º</th>
            <th style={thstyle}>{Number((today.temp.night).toFixed(0))}º</th>
            <th style={thstyle}>{Number((tomorrow.temp.day).toFixed(0))}º</th>
          </tr>
          <tr style={descrow}>
            <th style={thstyle}>{today.weather[0].description}</th>
            <th style={thstyle}>{today.weather[0].description}</th>
            <th style={thstyle}>{tomorrow.weather[0].description}</th>
          </tr>
        </tbody>
      </table>
    );
}
const thstyle={
  width: '140px',
  textAlign: 'center',
  verticalAlign: 'middle',
}
const head = {
  height:'50px'
}
const table={
  border:'right',
  width:'100%',
  backgroundColor: 'rgba(255,255,255,0.1)',

}

const temprow = {
  height:'50px',
}
const descrow = {
  height:'50px',
}
const imgrow = {
  width:'50px',
  height:'200px',
}

const todayStyle={
  backgroundColor:'#fff',
  height:'100%',
  width:'500px',
}
const temp={
}
const description={
}

const icon={
  width: '140px',
  textAlign: 'center',
  verticalAlign: 'middle',
}
