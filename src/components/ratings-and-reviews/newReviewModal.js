import React from "react";
import Stars from "./stars.js";
import UploadPhotos from "./uploadPhotos.js";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {charScales} from "./constants.js";
import apiMaster from "../../apiMaster.js";

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      recommend: 1,
      characteristics: {},
      summary: "",
      body: "",
      photos: {},
      nickname: "",
      email: "",
      showImgModal: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getScaleValue = this.getScaleValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleCharChange = this.handleCharChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
  }

  handleSubmit(reviewObj) {
    console.log('this is the review that we will send to the API', reviewObj);
    this.props.toggleModal();
    // apiMaster.postReview({ rating, summary, body, recommend, nickname, email, photos, characteristics })
    //   .then(() => {
    //     console.log('the review was posted successfully!')
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })
  }

  getScaleValue(characteristic, rating) {
    rating = rating.toString();
    return charScales[characteristic][rating];
  }

  handleChange(e) {
    let temp = {};
    temp[e.target.name] = e.target.value;
    this.setState(temp)
  }

  handleCharChange(e) {
    let temp = this.state.characteristics;
    temp[e.target.name] = e.target.value
    this.setState({
      characteristics: temp
    })
  }

  handleRatingChange(newRating) {
    this.setState ({
      rating: newRating
    })
  }

  toggleModal(e) {
    e.preventDefault();
    let temp = this.state.showImgModal;
    this.setState({
      showImgModal: !temp
    })
  }

  render() {
    return (
      <Modal
        className="modal"
        show={this.props.show}
      >
        {this.props.currentProductCharacteristics &&
        this.props.currentProductName ? (
          <>
            <Modal.Header>
              <Modal.Title>
                <h4>Write Your Review</h4>
                <h6>
                  <small>{`About the ${this.props.currentProductName}`}</small>
                </h6>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="overallRating">
                  <Form.Label>* Overall Rating</Form.Label>
                  <Stars name='rating' value={this.state.rating} handleChange={this.handleRatingChange} rating={Number(0)} allowChange={true} />
                </Form.Group>
                <Form.Group controlId="recommendation">
                  <Form.Label>* Do you recommend this product?</Form.Label><br/>
                  <Form.Check
                    type="radio"
                    name="recommend"
                    value='1'
                    label='Yes'
                    id='1'
                    onChange={e => this.handleChange(e)}
                  />
                  <Form.Check
                    type="radio"
                    name="recommend"
                    value='0'
                    label='No'
                    id='0'
                    onChange={e => this.handleChange(e)}
                  />
                </Form.Group>
                <Form.Group controlId="characteristicFilters">
                  <Form.Label>* Characteristics</Form.Label><br/>
                  {Object.keys(this.props.currentProductCharacteristics).map(
                    (char) => {
                      return (<>
                        <Form.Label>{char}</Form.Label> <br/>
                        {["1", "2", "3", "4", "5"].map((item, i) => {
                          return (<>
                            <Form.Check
                              type="radio"
                              name={char}
                              label={this.getScaleValue(char, item)}
                              value={item}
                              onChange={e => this.handleCharChange(e)}
                              id={`${char}${item}`}
                            />
                          </>)
                            
                          })}</>
                      );
                    }
                  )}{" "}
                  <Form.Text className="text-muted">
                    <p style={{ color: 'red' }}>Characteristics are required</p>
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="reviewSummary">
                  <Form.Label>* Review Summary</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    type="text"
                    placeholder="Example: Best purchase ever!"
                    name="summary"
                    maxLength={60}
                    value={this.state.summary}
                    onChange={e => this.handleChange(e)}
                  />
                  <Form.Text className="text-muted">
                    <p style={{ color: 'red' }}>Summary is required</p>
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="reviewBody">
                  <Form.Label>* Review Body</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    type="text"
                    placeholder="Why did you like the product or not?"
                    name="body"
                    maxLength={1000}
                    minLength={50}
                    value={this.state.body}
                    onChange={e => this.handleChange(e)}
                  />
                  <Form.Text><small>{this.state.body.length < 51 ? `Minimum required characters left: ${50 - Number(this.state.body.length)}` : 'Minimum reached'}</small></Form.Text>
                  <Form.Text className="text-muted">
                    <p style={{ color: 'red' }}>Body is required</p>
                  </Form.Text>
                </Form.Group>
                <button id='upload-photos-modal-button' className='main-action-button review-button' onClick={e => this.toggleModal(e)}>
                  Upload your photos
                </button>
                {this. state.showImgModal ? <UploadPhotos currentProductName={this.props.currentProductName} showImgModal={this.state.showImgModal} onClick={this.toggleModal}/> : null}
                <br/>
                <Form.Group controlId="nickname">
                  <Form.Label>* What is your nickname?</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder="Enter email"
                    name="nickname"
                    value={this.state.nickname}
                    onChange={e => this.handleChange(e)}
                    placeholder="Example: jackson11!"
                    maxLength={60}
                  />
                  <Form.Text><small>
                    For privacy reasons, do not use your full name or email
                    address
                  </small></Form.Text>
                  <Form.Text className="text-muted">
                    <p style={{ color: 'red' }}>Nickname is required</p>
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>* Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                    placeholder="Example: jackson11@email.com"
                    maxLength={60}
                  />
                  <Form.Text><small>
                    For authentication reasons, you will not be emailed
                  </small></Form.Text>
                  <Form.Text className="text-muted">
                    <p style={{ color: 'red' }}>Email is required</p>
                  </Form.Text>
                </Form.Group>
                <button className='main-action-button review-button' onClick={(e) => this.handleSubmit(this.state)}>
                  Submit Review
                </button>
              </Form>
            </Modal.Body>
          </>
        ) : null}
      </Modal>
    );
  }
}

export default NewReview;