import React from 'react';
import ReviewList from './reviewList.js';
import RatingsBreakdown from './ratingsBreakdown.js';
import apiMaster from '../../apiMaster.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      reviews: [],
      currentProductRatings: []
    };
  }

  componentDidMount() {
    apiMaster.getReviewsOfProduct(this.props.currentProductId)
      .then(({ data }) => {
        let ratings = this.getRatings(data.results);
        this.setState({
          reviews: data.results,
          currentProductRatings: ratings
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  getRatings(reviewsArray) {
    return reviewsArray.map((review) => {
      return review.rating;
    })
  }

  render() {
    return (
      <div className='reviews-ratings-container'>RATINGS AND REVIEWS
        <ReviewList reviews={this.state.reviews} currentProductID={this.props.currentProductID}/>
        <RatingsBreakdown currentProductRatings={this.state.currentProductRatings} currentProductID={this.props.currentProductID} averageRating={this.props.averageRating} />
      </div>
    );
  }
} 

export default RatingsReviews;
