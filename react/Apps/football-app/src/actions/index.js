import axios from 'axios';

export const FETCH_SCORES = 'FETCH_SCORES';
export const FETCH_STREAM = 'FETCH_STREAM';


export function fetchScores() {
  const initialState = [
    {
      id: 1,
      HomeTeam: "CRY",
      AwayTeam: "CHE",
      FTHG: 0,
      FTAG: 1,
    },
    {
      id: 2,
      HomeTeam: "MID",
      AwayTeam: "SWA",
      FTHG: 3,
      FTAG: 0,
    },
    {
      id: 3,
      HomeTeam: "STK",
      AwayTeam: "LEI",
      FTHG: 2,
      FTAG: 2,
    },
    {
      id: 4,
      HomeTeam: "SUN",
      AwayTeam: "WAT",
      FTHG: 1,
      FTAG: 0,
    },
    {
      id: 5,
      HomeTeam: "WBA",
      AwayTeam: "MUN",
      FTHG: 0,
      FTAG: 2,
    },
    {
      id: 6,
      HomeTeam: "WHU",
      AwayTeam: "HUL",
      FTHG: 1,
      FTAG: 0,
    },
    {
      id: 7,
      HomeTeam: "BOU",
      AwayTeam: "SOU",
      FTHG: 1,
      FTAG: 3,
    },
    {
      id: 8,
      HomeTeam: "MCI",
      AwayTeam: "ARS",
      FTHG: 2,
      FTAG: 1,
    },
    {
      id: 9,
      HomeTeam: "TOT",
      AwayTeam: "BUR",
      FTHG: 2,
      FTAG: 1,
    },
    {
      id: 10,
      HomeTeam: "EVE",
      AwayTeam: "LIV",
      FTHG: 0,
      FTAG: 1,
    },

  ]
  const request = axios.get("http://codepen.io/jobs.json")


  return {
    type: FETCH_SCORES,
    payload: initialState
  };
}

export function fetchStream(selected){
  return {
    type: FETCH_STREAM,
    payload: selected
  };
}
