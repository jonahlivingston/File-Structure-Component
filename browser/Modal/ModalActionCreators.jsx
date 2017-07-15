import { breadthFirstToggle } from '../utils';
import { breadthFirstIndex } from '../utils';

export const TOGGLE = 'TOGGLE';
export const INDEX = 'INDEX';
export const SELECT = 'SELECT';

export const toggleFolder = (index,files) => {
    const postToggleState = breadthFirstToggle(index,files);
    return({
        type: TOGGLE,
        postToggleState: postToggleState,
    });
};

export const indexFiles = (files) => {
    const postIndexState = breadthFirstIndex(files);
    return ({
        type: INDEX,
        postIndexState: postIndexState,
    });
};

export const select = (index) => ({
    type: SELECT,
    index:index,
});
