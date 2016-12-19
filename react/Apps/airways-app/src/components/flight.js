import React, { Component } from 'react';
import '../assets/App.css';


class Flight extends Component {

handleClick(){
  console.log("selected")
}

  render() {
    return (
      <div className="flight-box">
          <span>{this.props.hourDeparture}</span>
          <span><hr width="200" /> </span>
          <span>{this.props.hourArrival}</span>
          <span></span>
          <span></span>


          <span>{this.props.price}</span>
          <span><button className="btnselect" onClick={this.handleClick.bind(this)}>Select</button></span>
      </div>
    );
  }
}




export default Flight
