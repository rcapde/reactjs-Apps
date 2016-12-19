import React, { Component } from 'react';
import '../assets/App.css';
import { connect } from 'react-redux';

import Flight from '../components/flight'

class Results extends Component {

  render() {

    const Flights = this.props.flights.map((flight)=>{
      return(
        <Flight key={flight.id} id={flight.id}
        hourDeparture={flight.hourDeparture}
        hourArrival={flight.hourArrival}
        price={flight.price}
        />
      );
    })

  return (
      <div className="results-box">
        <div className="results-header">
          <span>Flights from {this.props.flights[0].departure} to {this.props.flights[0].destination} the {this.props.flights[0].dateDeparture}</span>
        </div>
        {Flights}
      </div>

  );
  }
}

function mapStateToProps(state){
  return{
    flights: state.flights
  };
}

export default connect(mapStateToProps)(Results);
