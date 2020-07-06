import React from "react";
import Stars from "./stars.js";
import Modal from "react-bootstrap/Modal";
import {charScales} from "./constants.js";
import apiMaster from "../../apiMaster.js";

class UploadPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  render() {
    return (
      <Modal
        className="modal"
        show={this.props.showImgModal}
        animation={false}
        centered
      >
        <Modal.Header>
            <Modal.Title>
            <h4>Upload Your Photos</h4>
            <h6>
                <small>{`About the ${this.props.currentProductName}`}</small>
            </h6>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type='file'/>
        </Modal.Body>
        <Modal.Footer>
            <button className='main-action-button' onClick={e => this.props.onClick(e)}>
            Upload
            </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UploadPhotos;
