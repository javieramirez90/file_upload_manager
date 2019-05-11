import React, { Component } from 'react';
import './Dropzone.css'

class Dropzone extends Component {
  constructor(props){
    super(props)
    this.state = {
      hightlight: false
    }
    this.fileInputRef = React.createRef();
  }

  openFileDialog = () => {
    if(this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded = (event) => {
    if(this.props.disabled) return;
    const files = event.target.files;
    if(this.props.onFilesAdded){
      const array = this.fileListToArray(files)
      this.props.onFilesAdded(array);
    }
  }

  onDragOver = (event) => {
    event.preventDefault();

    if(this.props.disabled) return;

    this.setState({ hightlight: true });
  }

  onDragLeave = () => {
    this.setState({ hightlight: false });
  }

  onDrop = (event) => {
    event.preventDefault();
    if(this.props.disabled) return;

    const files = event.dataTransfer.files;
    if(this.props.onFilesAdded) {
      const array =  this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ hightlight: false});
  }

  // fileListToArray = (list) => {
  //   const array = [];
  //   for(let file of list){
  //     array.push(file);
  //   }
  //   return array;
  // }
  fileListToArray = (list) => {
    const array = []
    for (let i = 0; i < list.length; i++) {
      array.push(list.item(i))
    }
    return array
  }

  render(){
    return(
      <div 
      className={`Dropzone ${this.state.hightlight ? "Highlight" : ""}`} 
      onClick={this.openFileDialog} 
      onDragOver={this.onDragOver} 
      onDragLeave={this.onDragLeave} 
      onDrop={this.onDrop} 
      style={{ cursor: this.props.disabled ? "default" : "pointer" }}>
        <img src="http://cdn.onlinewebfonts.com/svg/img_522887.png" alt="upload" className="Icon"/>
        <input type="file" multiple ref={this.fileInputRef} className="FileInput" onChange={this.onFilesAdded}/>
        <span>Upload Files</span>
      </div>
    )
  }
}

export default Dropzone