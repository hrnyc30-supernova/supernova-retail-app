import React from 'react';
import Stars from './stars.js';
import ReviewList from './reviewList.js';

const RatingsReviews = props => {
    return (
      <div className='reviews-ratings-container'>
        <ReviewList averageRating={props.averageRating} currentProductID={props.currentProductID}/>
      </div>
    )
}

export default RatingsReviews;
