import { GET_FLIGHTS } from '../actions/index';

const initialState = [
  {
    id:1,
    departure:'Barcelona',
    destination: 'London',
    dateDeparture: '17/04/17',
    hourDeparture:'9:15',
    hourArrival:'11:00',
    price:'150€',
  },
  {
    id:2,
    departure:'Barcelona',
    destination: 'London',
    dateDeparture: '17/04/17',
    hourDeparture:'17:00',
    hourArrival:'18:45',
    price:'120€',
  },
  {
    id:3,
    departure:'Barcelona',
    destination: 'Helsinki',
    dateDeparture: '17/04/17',
    hourDeparture:'22:15',
    hourArrival:'23:55',
    price:'90€',
  },

]
export default function(state = initialState , action){

  switch (action.type) {
  case GET_FLIGHTS:
    return  {  ...state, data: action.payload.data};
  default:
    return state;
  }
}
