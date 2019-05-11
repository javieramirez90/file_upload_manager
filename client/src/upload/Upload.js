import React, { Component } from 'react'
import './Upload.css'

class Upload extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content">Content</div>
        <div className="Files">Files</div>
        <div className="Actions">Actions</div>
      </div>
    )
  }
}

export default Upload;