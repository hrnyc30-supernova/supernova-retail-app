import React from 'react';
import Stars from './stars.js';
import ReviewList from './reviewList.js';
import AddReviewButton from './addReviewButton.js';
import apiMaster from '../../apiMaster.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    apiMaster.getReviewsOfProduct(this.props.currentProductId)
      .then(({ data }) => {
        this.setState({
          reviews: data.results
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className='reviews-ratings-container'>
        {this.state.reviews.length > 0 ? <ReviewList reviews={this.state.reviews} /> : <AddReviewButton />}
        <Stars averageRating={this.props.averageRating} />
      </div>
    );
  }
}

export default RatingsReviews;
