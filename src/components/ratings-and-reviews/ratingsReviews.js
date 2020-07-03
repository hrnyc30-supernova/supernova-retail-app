import React from 'react';
import Stars from './stars.js';
import ReviewList from './reviewList.js';
import AddReviewButton from './addReviewButton.js';

const RatingsReviews = props => {
    return (
      <div className='reviews-ratings-container'>RATINGS AND REVIEWS
        <ReviewList currentProductID={props.currentProductID}/>
        <Stars averageRating={props.averageRating} />
      </div>
    );
}

export default RatingsReviews;
