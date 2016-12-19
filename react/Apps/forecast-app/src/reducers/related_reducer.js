import { RELATED_WEATHER } from '../actions/index';

const INITIAL_STATE = { data: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RELATED_WEATHER:
    return  {  ...state, data: action.payload.data};
  }
  return state;
}
