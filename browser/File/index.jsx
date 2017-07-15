import React from 'react';
import {truncate} from '../utils';

export const File = (props) => {
    const highlighted = props.selected === props.index && "highlighted";
    return(
        <div onClick={()=>{props.select(props.index)}} className = {`file ${highlighted}`}>
        <div className = "file-icon"/>
        <h6>{truncate(props.name)}</h6>
        </div>
    )
}

export default File;
