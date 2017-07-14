import React from 'react';

export const Folder = (props) => {
    return(
        <div onClick={()=>{
            props.toggleFolder(props.name)}} className="folder">
        <h6>{props.name}</h6>
        </div>
    )
}


export default Folder;
