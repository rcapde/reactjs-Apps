import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBar from './inputbar';
import Todo from './todo';

class TodoList extends Component {

  render() {
    const Todos = this.props.todos.map((todo)=>{
      console.log(todo.completed);
      return(
        <Todo key={todo.id} id={todo.id} text={todo.text} />
      );
    })
    return (
      <div style={main}>
        <div style={content}>
            <div style={list}>
            <h2>Todolist</h2>
            <div><InputBar /></div>
                {Todos}
            </div>
        </div>
      </div>
    );
  }
}
const content={
  marginLeft:'30%',
  marginRight:'30%',
  position:'relative',
  backgroundColor:'#FBFF76',
  borderRadius:'10px',
  width:'40%',
  color:'#5C5656',
}
const list={
  paddingTop:'30px',
  paddingBottom:'50px',
  marginLeft:'20px',

}
const main={
  width:'100%',
  height:'100%',

}

function mapStateToProps(state){
  return{
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
