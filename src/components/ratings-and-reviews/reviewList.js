import React from 'react';
import ReviewTile from './reviewTile.js';
import MoreReviewsButton from './moreReviewsButton.js';
import AddReviewButton from './addReviewButton.js';
import apiMaster from '../../apiMaster.js';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    apiMaster
      .getReviewsOfProduct(this.props.currentProductId)
      .then(({ data }) => {
        this.setState({
          reviews: data.results,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="review-list-container">
        {this.state.reviews.length === 0
          ? null
          : this.state.reviews.map((review) => {
              // console.log('review object', review);
              return <ReviewTile key={review.review_id} review={review} />;
            })}
        {this.state.reviews.length > 2 ? <MoreReviewsButton /> : null}
        <AddReviewButton />
      </div>
    );
  }
}

export default ReviewList;
