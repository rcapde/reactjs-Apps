import React from 'react';
import {Link} from 'react-router';

export default function SecondBar (props){
  return(
  <nav style={navStyle} className="navbar navbar-default">
  <div className="container-fluid">
    <div>
      <ul style={city} className="nav navbar-nav">
        <li>Forecast for {props.city}</li>
        <li className="active"></li>
      </ul>
    </div>
  </div>
</nav>

  );
}
const city = {
  fontSize:'22px',
  color:'white',
  marginTop:'7px',
}
const navStyle={
  backgroundColor:'#1f384d',
  height:'5px',
  marginTop:'-20px',
}
