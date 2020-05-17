import { makeRequest } from '../services/makeRequest.js';

export const ADD_REQUEST = 'ADD_REQUEST';
export const addRequest = request => dispatch => {
  return makeRequest(request)
    .then(madeRequest => {
      dispatch({
        type: ADD_REQUEST,
        payload: madeRequest
    });
})};
