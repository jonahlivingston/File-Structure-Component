
export const truncate = (str) => {
    var length = Math.min(str.length, 25);
    if (length < str.length) {
        return str.slice(0, Math.min(str.length, 25)) + "..."
    }
    return str;
};

export const breadthFirstToggle = (index,files) => {
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
};

export const breadthFirstIndex = (state) => {
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
};
