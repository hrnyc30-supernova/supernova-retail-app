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
      console.log(this.props.currentProductCharacteristics);
    if (this.props.show === false) return null;
    return (
        <div>
            <h4>Write Your Review</h4><h6>{`About the ${this.props.currentProductName}`}</h6>
            <form>
                <p>*Overall Rating <Stars/></p>
                <label htmlFor='recommend'>*Do you recommend this product?</label>
                <input type="radio" name="recommend" value="yes"/> Yes
                <input type="radio" name="recommend" value="no"/> No<br/>
                <label htmlFor='characteristics'>*Characteristics</label><br/>
                {Object.keys(this.props.currentProductCharacteristics).map(char => {
                    return <><label htmlFor={char}>{`${char}: `}</label>{[...Array(5)].map((item, i) => {
                        return <><label htmlFor={char}>{i + 1}</label><input type="radio" name={char} value={i + 1}/></> 

                    })}</>
                })}
                <p>*Review Summary</p>
                <p>*Review Body</p>
                <p>Upload Photos</p>
                <p>*Nickname</p>
                <p>Email</p>
            </form>
          <button onClick={e => this.sendReview(this.state)}>Submit Review</button>
        </div>
    );
  }
} 

export default NewReview;
