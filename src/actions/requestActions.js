export const POST = 'POST';
export const post = () => ({
    type: POST,
    payload: {
        body
    }
});

// GET, PATCH, PUT, DELETE

// url, method, body = response 

import { fetchHabits, makeRequest } from '../services/makeRequest.js';

export const ADD_REQUEST = 'ADD_REQUEST';
export const addRequest = request => dispatch => {
  return makeRequest(request)
    .then(madeRequest => {
      dispatch({
        type: ADD_REQUEST,
        payload: madeRequest
    });
});

// export const SET_HABITS = 'SET_HABITS';
// export const setHabits = () => dispatch => {
//   return fetchHabits()
//     .then(habits => {
//       dispatch({
//         type: SET_HABITS,
//         payload: habits
//       });
//     });
// };