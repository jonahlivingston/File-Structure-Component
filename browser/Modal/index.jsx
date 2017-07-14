import React from 'react';
import { connect } from 'react-redux';
import Folder from '../Folder';
import File from '../File';
import { toggleFolder, indexFiles, select } from './ModalActionCreators';


class Modal extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.indexFiles(this.props.fileStructure)
    }

    render(){
        console.log(this.props)
        const deepRender = (files) => {
            //if there are no files there is no need to recurse further or render anything
            if (!files) return;

            //if there are files go through them and render each open file and all of its children
            return files.map((file) => {
            if (!file.open){
                if (file.type==="folder"){
                    return <Folder toggleFolder={this.props.toggleFolder} select={this.props.select} name={file.name} index={file.index} files={this.props.fileStructure} selected={this.props.selected} open={file.open} privateFolder={file.private} />
                }
                else{
                    return <File name={file.name} index={file.index} select={this.props.select} files={this.props.fileStructure} selected={this.props.selected} />
                }
            }

            //if it has open property we know it must be a folder
            else{
                return (
                    <div>
                        <Folder toggleFolder={this.props.toggleFolder} select={this.props.select} index={file.index} name={file.name} files={this.props.fileStructure} selected={this.props.selected} open={file.open}/>
                        <div className="subdirectory">
                            {deepRender(file.children)}
                        </div>
                    </div>
                )
            }})   
        }

        const files = deepRender(this.props.fileStructure.children)
        
        return(
            <div id="modal">
                <div id="header">
                    <h1 id="title">Title</h1>
                    <div className="x-icon"/>
                </div>
                <div id="subheader">
                    <h1 id="subtitle">Label</h1>
                </div>
                <div id="files">
                    {files}
                </div>
                <div id="footer">
                    <a id="footer-link">Link</a>
                    <button id="done-btn">Done</button>
                </div>
            </div>
        )

}
}

const mapStateToProps = (state) => ({
    fileStructure: state.modal.files,
    selected: state.modal.selected,
});

const mapDispatchToProps = (dispatch) => ({
    toggleFolder(index,files){
        dispatch(toggleFolder(index,files));
    },
    indexFiles(files){
        dispatch(indexFiles(files));
    },
    select(index){
        dispatch(select(index));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);