export const TOGGLE = 'TOGGLE';
export const INDEX = 'INDEX';
export const SELECT = 'SELECT';

export const toggleFolder = (index,files) => {
    console.log("aaa",index,files)
    const postToggleState = breadthFirstToggle(index,files);
    return({
        type: TOGGLE,
        postToggleState: postToggleState,
    })
}

export const indexFiles = (files) => {
    const postIndexState = breadthFirstIndex(files);
    return ({
        type: INDEX,
        postIndexState: postIndexState,
    })
}

export const select = (index) => ({
    type: SELECT,
    index:index,
})


export function breadthFirstToggle(index,files){
    var arrToSearch = [files];
    while(arrToSearch.length){
        var examined = arrToSearch.shift();
        if (examined.index===index){
            examined.open = !examined.open;
            return files
        }
        else{
            if (examined.children){
                examined.children.forEach((file) => {
                arrToSearch.push(file);
                });
            }
        }
    };
}

 function breadthFirstIndex(state){
    console.log("breadthstateis",state)
    var index = 0; 
    var arrToSearch = [state];
    while(arrToSearch.length){
        var examined = arrToSearch.shift();
        examined.index = index;
        index++
        if (examined.children){
            examined.children.forEach((file) => {
            arrToSearch.push(file);
            });
        }
    };
        return state;
}

