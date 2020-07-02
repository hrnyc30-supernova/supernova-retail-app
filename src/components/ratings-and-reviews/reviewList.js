import React from 'react';
import ReviewTile from './reviewTile.js';
import MoreReviewsButton from './moreReviewsButton.js';
import AddReviewButton from './addReviewButton.js';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return(
            <div className='review-list-container'>
                {
                    this.props.reviews.map(review => {
                        return <ReviewTile key={review.review_id} review={review}/>
                    })
                }
                {this.props.reviews.length > 2 ? <MoreReviewsButton /> : null}
                <AddReviewButton />
            </div>
        );
    }
}

export default ReviewList;