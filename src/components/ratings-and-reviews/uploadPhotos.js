import React from "react";
import Modal from "react-bootstrap/Modal";

class UploadPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
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
          <form>
            <label className='label-container' htmlFor='photo'>Choose up to 5 photos: <br/>
                <input type="file" id="photo1" name="photo" accept="image/png, image/jpeg"/>
                <input type="file" id="photo2" name="photo" accept="image/png, image/jpeg"/>
                <input type="file" id="photo3" name="photo" accept="image/png, image/jpeg"/>
                <input type="file" id="photo4" name="photo" accept="image/png, image/jpeg"/>
                <input type="file" id="photo5" name="photo" accept="image/png, image/jpeg"/>
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="main-action-button"
            onClick={(e) => this.props.onClick(e)}
          >
            Upload
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UploadPhotos;
