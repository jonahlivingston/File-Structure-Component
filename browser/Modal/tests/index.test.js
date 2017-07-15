import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import ModalContainer, { Modal }  from '../';
import ModalReducer from '../ModalReducer';
import { indexFiles } from '../ModalActionCreators'
chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('<Modal/>', () => {
    let root;
    let store;
    beforeEach('shallow render Login component', () => {
        // store = createStore(reducerState => reducerState, {});
        root = shallow(<Modal fileStructure={{children:[{index:1, type:"folder", open:false,children:[{type:"file"}]},{index:2, type:"folder", open: true, children:[{type:"file", index:3,}]}]}} />);
    });
    it('renders only the files in open folders', () => {
        expect(root.find('File')).to.have.length(1);
        expect(root.find('Folder')).to.have.length(2);
    });
    it('contains a button', () => {
        expect(root.find('button')).to.have.length(1);
    });
});

// describe('<ModalContainer/>', () => {
//     let root;
//     let store;
//     beforeEach('create store, shallow render Login Container', () => {
//         store = createStore(ModalReducer,{});
//         store.dispatch(indexFiles())
//         root = shallow(<ModalContainer store={store} />);
//     });
//     it('gets props.files from state.files', () => {
//         expect(root.find('Modal')).to.have.prop('fileStructure');
//     });
// });
