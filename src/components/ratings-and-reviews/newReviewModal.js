import React from 'react';
import Stars from './stars.js';
import apiMaster from '../../apiMaster.js';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      
    };
    
  }

  render() {
    if (this.props.show === false) return null;
    return (
      <div>
          <h4>Write Your Review</h4><h6>{`About the ${this.props.currentProductName}`}</h6>
          <p>Overall Rating <Stars/></p>

      </div>
    );
  }
} 

export default NewReview;
