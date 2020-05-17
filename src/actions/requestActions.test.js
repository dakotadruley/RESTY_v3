import { ADD_REQUEST, addRequest } from './requestActions.js';
import { makeRequest } from '../services/makeRequest.js';

describe('request actions', () => {
    it('creates an ADD action', () => {
        const action = addRequest({
    
        });

        expect(action).toEqual({
            type: ADD_REQUEST,
            payload: makeRequest
        });
    });
});