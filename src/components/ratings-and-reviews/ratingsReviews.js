import React from 'react';
import ReviewList from './reviewList.js';
import RatingsBreakdown from './ratingsBreakdown.js';

const RatingsReviews = props => {
    return (
      <div className='reviews-ratings-container'>RATINGS AND REVIEWS
        <ReviewList currentProductID={props.currentProductID}/>
        <RatingsBreakdown currentProductID={props.currentProductID} averageRating={props.averageRating} />
      </div>
    )
}

export default RatingsReviews;
