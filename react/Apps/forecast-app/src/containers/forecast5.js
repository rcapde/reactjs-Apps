import React, { Component } from 'react';
import { connect } from 'react-redux';
import Favorite from '../components/favorite';
import _ from "lodash";
import dateFormat from 'dateformat';
import {Link} from 'react-router';


export default function Forecast5 (props){


  const items = props.itemlist5.map((item)=> {
  return(
       <Favorite date={dateFormat(new Date(item.dt*1000),"ddd, mmm, d").toString()} humidity={item.humidity} daytemp={item.temp.max} nighttemp={item.temp.min} picture={`../../images/Icons/SVG/${item.weather[0].icon}.svg`} description={item.weather[0].description} deg={item.deg} speed={item.speed}/>
        );
      })
    return(
        <div style={content}>
          <table style={tableStyle} className="table table-hover">
          <thead style={theader}>
            <tr>
              <th>DAY</th>
              <th></th>
              <th>DESCRIPTION</th>
              <th>TEMP</th>
              <th>HUMIDITY</th>
              <th>WIND</th>
            </tr>
          </thead>
          <tbody style={tbody}>
              {items}
          </tbody>
          </table>
        </div>
    );
}
const content={
  borderRadius:'4px',
  width:'100%',
}
const tableStyle={
}
const theader = {
  backgroundColor: '#00afbe',
  color:'#fff',
}
const tbody = {
  backgroundColor: '#fff',
}
