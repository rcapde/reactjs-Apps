import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';
import { connect } from 'react-redux';

class InputBar extends Component {
  state = { todo: ''};

  handleInputChange(event){
    this.setState({todo: event.target.value})
  }
  handleFormSubmit(event){
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({todo: ''});
  }
  render(){
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
        <input
          className="list-group"
          placeholder="Write a Todo"
          value={this.state.todo}
          onChange={this.handleInputChange.bind(this)} />
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}
export default connect(null,mapDispatchToProps)(InputBar);
