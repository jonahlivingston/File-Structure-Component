import { expect } from 'chai';
import { TOGGLE, toggleFolder, INDEX, indexFiles, SELECT, select   } from '../ModalActionCreators';

describe('Modal Action Creators', () => {

    describe('toggleFolder', () => {
        it('returns an object with type TOGGLE and the passed in index', () => {
            
            const result = {
                type: TOGGLE,
                index: 1
            };
            expect(toggleFolder(1)).to.deep.equal(result);
        });
    });

    describe('select', () => {
        it('return an object with type SELECT and the passed in index', () => {
            const result = {
                type: SELECT,
                index: 2,
            };
            expect(select(2)).to.deep.equal(result);
        })
    });
    
    describe('index', () => {
        it('returns an object with type INDEX', () => {
            const result = {
                type: INDEX,
            }
            expect(indexFiles()).to.deep.equal(result);
        });
    });
});