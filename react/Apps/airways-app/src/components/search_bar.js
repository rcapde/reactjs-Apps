import Select from 'react-select';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFlights }from '../actions/index';
import '../assets/App.css';
var moment = require('moment');
import DatePicker from 'react-datepicker';

import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';


class SearchBar extends Component {

  state = {
    options:[
     { value: 'Barcelona', label: 'Barcelona' },
     { value: 'Paris', label: 'Paris' },
     { value: 'Bristol', label: 'Bristol' },
     { value: 'Helsinki', label: 'Helsinki' },
     { value: 'Edinburgh', label: 'Edinburgh' },
     { value: 'Brussels', label: 'Brussels' }
   ],
   departure: { value: 'Barcelona', label: 'Barcelona' },
   startDate: moment(),
   endDate: '',

  };

  handleDep(departure){
    this.setState({ departure });
  }
  handleDest(destination){
    this.setState({ destination });
  }
  handleChangeStart(date) {
  this.setState({ startDate: date });
}
  handleChangeEnd(date){
  this.setState({ endDate: date})
  }
  handleClick(){
    this.props.getFlights(this.state);
  }

  render() {
  return (
    <div className="sb-content">
      <div className="select_boxes">
          <Select
              placeholder="Departure city"
              name="form-field-name"
              options={this.state.options}
              onChange={this.handleDep.bind(this)}
              value={this.state.departure}
          />
          <br/>
          <Select
              placeholder="Destination city"
              name="form-field-name"
              options={this.state.options}
              onChange={this.handleDest.bind(this)}
              value={this.state.destination}
          />
      </div>
      <div className="date-boxes">
        <div>
        <DatePicker
            dateFormat="DD/MM/YYYY"
            selected={this.state.startDate}
            selectsStart  startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart.bind(this)}
            isClearable={true}
            minDate={moment()}
        />
        </div>
        <div className='margin'>
        <DatePicker
            dateFormat="DD/MM/YYYY"
            selected={this.state.endDate}
            selectsEnd  startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd.bind(this)}
            isClearable={true}
            minDate={this.state.startDate}
        />
        </div>
      </div>
      <button className="btn" onClick={this.handleClick.bind(this)}> Fly</button>

    </div>

  );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFlights }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
