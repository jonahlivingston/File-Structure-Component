import React from 'react';
import { truncate } from '../utils'

export const Folder = (props) => {
    const highlighted = props.selected===props.index && "highlighted";
    const open = props.open ? "minus-icon" : "plus-icon";
    const folderClass = props.privateFolder ? "private-icon" : "folder-icon";
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

export default Folder;
