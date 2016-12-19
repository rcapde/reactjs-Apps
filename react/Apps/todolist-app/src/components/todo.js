import React, { Component } from 'react';
import TodoList from './todolist';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {completed: this.props.completed};
  }

  render() {
    console.log(this.state.completed)

    return (
        <li style={itemStyle}>

          <span onClick={() => this.setState({completed: !this.state.completed})}
          style={{fontStyle: this.state.completed ? 'italic' : 'normal', textDecoration: this.state.completed ? 'line-through' : 'none'}}>
          {this.props.text}
          </span>

          <i onClick={() => this.props.deleteTodo(this.props.id)} style={icon} className="fa fa-times" />
        </li>
    );
  }
}

const icon = {
  marginRight:'20px',
  float: 'left',
  paddingTop:'5px',
}
const itemStyle = {
  listStyle:'none',
  height:'40px',
  paddingTop:'20px',
  width:'100%',
  fontSize:'1.2em',
}



export default connect(null, actions)(Todo)
