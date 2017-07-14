import React from 'react';

export const Folder = (props) => {
    console.log("folderfilesis", props.selected,props.index)
    const highlighted = props.selected===props.index&&"highlighted";
    const open = props.open ? "minus-icon" : "plus-icon";
    const folderClass = props.privateFolder ? "private-icon" : "folder-icon";
    const truncate = (str) => {
        var length = Math.min(str.length, 25)
        if (length < str.length) {
            return str.slice(0, Math.min(str.length, 25)) + "..."
        }
        return str
    }
    return (
        <div onClick={() => {
            props.select(props.index);
            props.toggleFolder(props.index, props.files);
        }}className = {`folder ${highlighted}`}>
            <div className = {open}/>
            <div className ={folderClass}/>
            <h6>{truncate(props.name)}</h6>
        </div>
    )
}
//

export default Folder;
