import { expect } from 'chai';
import { TOGGLE, toggleFolder, INDEX, indexFiles, SELECT, select   } from '../ModalActionCreators';

describe('Modal Action Creators', () => {

    describe('toggleFolder', () => {
        it('returns an object with type TOGGLE and a files object with indexed file toggled', () => {
            const exampleFiles = {children:[{index:1,open:false},{index:2, open: true, children:[{index:3}]}]};
            const result = {
                type: TOGGLE,
                postToggleState: {children:[{index:1,open:true},{index:2, open: true, children:[{index:3}]}]},
            };
            expect(toggleFolder(1, exampleFiles)).to.deep.equal(result);
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
        it('returns an object with type INDEX and the object with indexes added', () => {
            const nonIndexed = {children:[{open:false,},{open: true, children:[{}],}],};
            const indexed = {index:0, children:[{index:1,open:false,},{index:2, open: true, children:[{index:3,}],}]};
            const result = {
                type: INDEX,
                postIndexState: indexed
            }
            expect(indexFiles(nonIndexed)).to.deep.equal(result);
        });
    });
});