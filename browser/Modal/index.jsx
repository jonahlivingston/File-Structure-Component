import React from 'react';
import { connect } from 'react-redux';
import Folder from "../Folder";
import File from "../File";
import {toggleFolder} from "./ModalActionCreators";

export const Modal = (props) => {

    function deepRender(files){
    if (!files) return;
    return files.map((file) => {
        if (!file.open){
            if (file.type==="folder"){
                return <Folder toggleFolder={props.toggleFolder} name={file.name} />
            }
            else{
                return <File name={file.name} />
            }
        }
        //if it has open property we know it must be a folder
        else{
            return (
                <div>
                <Folder toggleFolder={props.toggleFolder} name={file.name} />
                <div className="subdirectory">
                {deepRender(file.children)}
                </div>
                </div>
            )
        }
    })   
}

   const files = deepRender(props.fileStructure.children)
    return(
        <div id="modal">
            <div id="header">
                <h1>title</h1>
            </div>
            <div id="subheader">
                <h1>label</h1>
            </div>
            <div id="files">
                {files}
            </div>
            <div className="section">
            <a>link</a>
            <button>Done</button>
            </div>
            
        </div>
    )
}




const mapStateToProps = (state) => ({
    fileStructure: state.fileStructure
});

const mapDispatchToProps = (dispatch) => ({
    toggleFolder(name){
        console.log("ten")
        dispatch(toggleFolder(name))
    }
})








export default connect(mapStateToProps, mapDispatchToProps)(Modal);