import { POST, post } from './requestActions.js';

describe('request actions', () => {
    it('creates a POST action', () => {
        const action = post({
            _id: '32619372189',
            url: 'this',
            body: 'that'
        });

        expect(action).toEqual({
            type: POST,
            payload: {
                _id: '32619372189',
                url: 'this',
                body: 'that'
            }
        });
    });
});