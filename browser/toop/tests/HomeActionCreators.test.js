import { expect } from 'chai';
import { INCREMENT, increment } from '../HomeActionCreators';

describe('Login Action Creators', () => {
    describe('increment', () => {
        it('returns an object with type AUTHENTICATED and a user', () => {
            const expectedResult = {
                type:"test"
            };
            expect(increment()).to.deep.equal(expectedResult);
        });
    });
});