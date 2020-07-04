import React from 'react';
import Stars from './stars.js';
import apiMaster from '../../apiMaster.js';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      rating: 0, 
      recommendation: '',
      characteristics: {},
      summary: '',
      body: '',
      photos: {},
      nickname: '',
      email: ''
    };
    this.sendReview = this.sendReview.bind(this);
  }

  sendReview(reviewObj) {
    // console.log('this is the review that we will send to the API', reviewObj);
  }

  render() {
    if (this.props.show === false) return null;
    return (
      <div>
          <h4>Write Your Review</h4><h6>{`About the ${this.props.currentProductName}`}</h6>
          <p>*Overall Rating <Stars/></p>
          <p>*Recommendation</p>
          <p>*Characteristics</p>
          <p>*Review Summary</p>
          <p>*Review Body</p>
          <p>Upload Photos</p>
          <p>*Nickname</p>
          <p>Email</p>
          <button onClick={e => this.sendReview(this.state)}>Submit Review</button>

      </div>
    );
  }
} 

export default NewReview;
