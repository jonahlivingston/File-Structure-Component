import React from "react";

export const File = (props) => {
    console.log("file",props.selected,props.index)
const highlighted = props.selected===props.index&&"highlighted";
const truncate = (str) => {
    var length = Math.min(str.length,25)
    if (length<str.length){
        return str.slice(0,Math.min(str.length,25)) + "..."
    }
    return str 
}
    return(
        <div onClick={()=>{props.select(props.index)}}className={`file ${highlighted}`}>
        <div className = "file-icon"/>
        <h6>{truncate(props.name)}</h6>
        </div>
    )
}

export default File;