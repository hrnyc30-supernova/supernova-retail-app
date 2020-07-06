import React from "react";
import Stars from "./stars.js";
import Modal from "react-bootstrap/Modal";
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
    this.sendReview = this.sendReview.bind(this);
    this.getScaleValue = this.getScaleValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleCharChange = this.handleCharChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
  }

  sendReview(reviewObj) {
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
        animation={false}
        centered
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
              <form>
                <div>
                  *Overall Rating{" "}
                  <Stars name='rating' value={this.state.rating} handleChange={this.handleRatingChange} rating={Number(0)} allowChange={true} />
                </div>
                <label className="label-container" htmlFor="recommend" required>
                  *Do you recommend this product?
                  <input
                    type="radio"
                    name="recommend"
                    default
                    value="1"
                    onClick={e => this.handleChange(e)}
                  />{" "}
                  Yes
                  <input
                    type="radio"
                    name="recommend"
                    value="0"
                  />{" "}
                  No
                </label>
                <br />
                <label className="label-container" htmlFor="characteristics">
                  *Characteristics
                  <br />
                  {Object.keys(this.props.currentProductCharacteristics).map(
                    (char) => {
                      return (
                        <div key={char.id}>
                          <label
                            className="label-container"
                            required
                            htmlFor={char}
                          >{`${char}: `}</label>
                          {["1", "2", "3", "4", "5"].map((item, i) => {
                            return (
                              <div key={i + 5}>
                                <input type="radio" onClick={e => this.handleCharChange(e)} name={char} value={i + 1} />
                                <small>{this.getScaleValue(char, item)}</small>
                              </div>
                            );
                          })}
                          <br />
                        </div>
                      );
                    }
                  )}{" "}
                </label>
                <br />
                <label className="label-container" required htmlFor="summary">
                  *Review Summary
                  <br />
                  <textarea
                    type="text"
                    id="summary"
                    required
                    name="summary"
                    value={this.state.summary}
                    onChange={e => this.handleChange(e)}
                    placeholder="Example: Best purchase ever!"
                    maxLength="60"
                  ></textarea>
                </label>
                <br />
                <label className="label-container" required htmlFor="body">
                  *Review Body
                  <br />
                  <textarea
                    type="text"
                    id="body"
                    required
                    name="body"
                    placeholder="Why did you like the product or not?"
                    maxLength="1000"
                    minLength="50"
                    value={this.state.body}
                    onChange={e => this.handleChange(e)}
                  ></textarea><br/> <small>{this.state.body.length < 51 ? `Minimum required characters left: ${50 - Number(this.state.body.length)}` : 'Minimum reached'}</small>
                </label><br/>
                <button className='main-action-button' onClick={e => this.toggleModal(e)}>Upload your photos</button>
                <label className="label-container" required htmlFor="nickname">
                  *What is your nickname
                  <br />
                  <textarea
                    type="text"
                    id="nickname"
                    required
                    name="nickname"
                    value={this.state.nickname}
                    onChange={e => this.handleChange(e)}
                    placeholder="Example: jackson11!"
                    maxLength="60"
                  ></textarea>
                  <br />
                  <small>
                    For privacy reasons, do not use your full name or email
                    address
                  </small>
                  <br />
                </label>
                <br />
                <label className="label-container" required htmlFor="email">
                  *Your email
                  <br />
                  <textarea
                    type="text"
                    id="email"
                    required
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                    placeholder="Example: jackson11@email.com"
                    maxLength="60"
                  ></textarea>
                  <br />
                  <small>
                    For authentication reasons, you will not be emailed
                  </small>
                </label>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button classname='main-action-button' onClick={(e) => this.sendReview(this.state)}>
                Submit Review
              </button>
            </Modal.Footer>
          </>
        ) : null}
      </Modal>
    );
  }
}

export default NewReview;
