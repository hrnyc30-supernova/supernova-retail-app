import React from 'react';
import ReviewList from './reviewList.js';
import RatingsBreakdown from './ratingsBreakdown.js';
import apiMaster from '../../apiMaster.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      reviews: [],
      currentProductRatings: [],
      recommendProduct: 0, 
      currentRating: {}
    };
    this.getRatings = this.getRatings.bind(this);
    this.getRecommendation = this.getRecommendation.bind(this);
  }

  componentDidMount() {
    apiMaster.getReviewsOfProduct(this.props.currentProductId)
      .then(({ data }) => {
        let ratings = this.getRatings(data.results);
        let recommend = this.getRecommendation(data.results);
        this.setState({
          reviews: data.results,
          currentProductRatings: ratings,
          recommendProduct: recommend
        })
      })
      .catch(err => {
        console.error(err);
      });

    apiMaster.getReviewMetaData(this.props.currentProductId)
      .then(({ data }) => {
        this.setState({
            currentRating: data
        })
      })
      .catch(err => {
          console.log(err);
      })
  }

  getRatings(reviewsArray) {
    return reviewsArray.map((review) => {
      return review.rating;
    })
  }

  getRecommendation(reviewsArray) {
    let numRec = reviewsArray.reduce((num, review) => {
      if (review.recommend === 1) num++;
      return num;
    }, 0);
    let length = reviewsArray.length;
    return numRec / length * 100;
  }

  render() {
    return (
      <div className='reviews-ratings-container'>RATINGS AND REVIEWS
        <ReviewList currentProductCharacteristics={this.state.currentRating.characteristics} currentProductName={this.props.currentProductName} reviews={this.state.reviews} currentProductID={this.props.currentProductID}/>
        <RatingsBreakdown currentRating={this.state.currentRating} recommend={this.state.recommendProduct} currentProductRatings={this.state.currentProductRatings} currentProductID={this.props.currentProductID} averageRating={this.props.averageRating} />
      </div>
    );
  }
} 

export default RatingsReviews;
