import axios from 'axios';

export const FETCH_SCORES = 'FETCH_SCORES';

export function fetchScores() {

  return {
    type: FETCH_SCORES,
    payload: "FCB"
  };
}
