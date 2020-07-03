import React from 'react';
import Stars from './stars.js';
import ReviewList from './reviewList.js';

const RatingsReviews = props => {
    return (
      <div className='reviews-ratings-container'>
        <ReviewList currentProductID={props.currentProductID}/>
        <Stars averageRating={props.averageRating} />
      </div>
    );
}

export default RatingsReviews;
