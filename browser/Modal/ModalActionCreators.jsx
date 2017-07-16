

export const TOGGLE = 'TOGGLE';
export const INDEX = 'INDEX';
export const SELECT = 'SELECT';

export const toggleFolder = (index) => {
    return({
        type: TOGGLE,
        index: index,
    });
};

export const indexFiles = () => {
    return ({
        type: INDEX,
    });
};

export const select = (index) => ({
    type: SELECT,
    index:index,
});
