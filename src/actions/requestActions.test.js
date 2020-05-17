import { POST, post } from './requestActions.js';

describe('request actions', () => {
    it('creates a POST action', () => {
        const action = post({
            body: 'that'
        });

        expect(action).toEqual({
            type: POST,
            payload: {
                url: 'this',
                body: 'that'
            }
        });
    });
});