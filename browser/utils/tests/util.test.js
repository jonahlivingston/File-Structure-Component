import { expect } from 'chai';
import { truncate, breadthFirstToggle, breadthFirstIndex } from '../../utils';

describe('Utilities', () => {
    describe('truncate', () => {
        it('returns correct 15 character string with ... if given long string', () => {
            expect(truncate("this is an example of a very long string")).to.equal("this is an example of a v...");
        });
        it('returns normal string if given a short string', () => {
            expect(truncate("this is an")).to.equal("this is an");
        });
    });
    describe('breadFirstToggle', () => {
        let testState;
        beforeEach("set inital state", ()=>{
            testState = {children:[{index:1,open:false},{index:2, open: true, children:[{index:3}]}]};
        });
        it('sets a closed file to open', () => {
            expect(breadthFirstToggle(1,testState)).to.deep.equal({children:[{index:1, open: true},{index:2, open: true,children:[{index:3}]}]});
        });
        it('sets a open to closed', () => {
            expect(breadthFirstToggle(2,testState)).to.deep.equal({children:[{index:1,open:false},{index:2, open:false, children:[{index:3}]}]});
        });
        it('finds a child and sets to open if it does not have open property', () => {
            expect(breadthFirstToggle(3,testState)).to.deep.equal({children:[{index:1,open:false},{index:2, open:true, children:[{index:3, open:true}]}]});
        }); 
    });
    describe('index', () => {
        let nonIndexed;
        let indexed;
        beforeEach("set inital state", () => {
            nonIndexed = {children:[{open:false,},{open: true, children:[{}],}],};
            indexed = {index:0, children:[{index:1,open:false,},{index:2, open: true, children:[{index:3,}],}]};
        });
        it('adds indexes to nonindexed nested objects', () => {
            expect(breadthFirstIndex(nonIndexed)).to.deep.equal(indexed);
        }); 
    });
});