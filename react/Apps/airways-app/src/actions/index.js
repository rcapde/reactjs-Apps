export const GET_FLIGHTS = 'GET_FLIGHTS';

export function getFlights() {

  const data = [
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

  return {
    type: GET_FLIGHTS,
    payload: data
  };
}
