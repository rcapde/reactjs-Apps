import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/index';

const initialState = [
  {
    id:1,
    text:'Caminar',
    completed: false,
  }
]

export default function todos(state = initialState, action){
    switch (action.type) {
      case ADD_TODO:
          return [
                  {
                    id: new Date().getTime(),
                    text: action.payload,
                    completed: false,
                  },
                  ...state
                ]
      case DELETE_TODO:
            return state.filter(todo =>
            todo.id !== action.payload
          )
      case COMPLETE_TODO:
          return state.map(todo =>
                  todo.id === action.payload ?
                    Object.assign({}, todo, { completed: !todo.completed }) :
                    todo
                )
      default:
      return state

    }
}
