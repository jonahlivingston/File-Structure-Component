import { expect } from 'chai';
import { createStore } from 'redux';
import { toggleFolder, indexFiles, select } from '../ModalActionCreators';
import ModalReducer from '../ModalReducer';
import data from '../data';
import { breadthFirstToggle, breadthFirstIndex } from '../../utils';

describe('Modal Reducer', () => {
    let testStore;
    let files;
    beforeEach('Create testing store from reducer', () => {
        testStore = createStore(ModalReducer);
        files = {children:[{open:false,},{open: true, children:[{}],}],}
    });
    it('has an initial file state of data json file and intial selected of null', () => {
        expect(testStore.getState()).to.deep.equal({files:data, selected:null});
    });
    it('toggleFolder correctly updates state', () => {
        testStore.dispatch(toggleFolder(1,files));
        const result = breadthFirstToggle(1,files);
        expect(testStore.getState().files).to.deep.equal(result);
    });
    it('select correctly updates state', () => {
        testStore.dispatch(select(3))
        expect(testStore.getState().selected).to.equal(3)
    });
    it('indexFiles correctly updates state', () => {
        console.log("files",testStore.getState().files)
        testStore.dispatch(indexFiles());
        const result = breadthFirstIndex(data);
        expect(testStore.getState().files).to.deep.equal(result)
    });
});

