import React from "react";
import ReviewList from "./reviewList.js";
import RatingsBreakdown from "./ratingsBreakdown.js";
import apiMaster from "../../apiMaster.js";
import { ratingScale } from "./constants.js";

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filtered: [],
      currentProductRatings: [],
      recommendProduct: 0,
      currentRating: {},
    };
    this.getRatings = this.getRatings.bind(this);
    this.getRecommendation = this.getRecommendation.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
  }

  componentDidMount() {
    apiMaster
      .getReviewsOfProduct(this.props.currentProductId, 20)
      .then(({ data }) => {
        let ratings = this.getRatings(data.results);
        let recommend = this.getRecommendation(data.results);
        this.setState({
          reviews: data.results,
          currentProductRatings: ratings,
          recommendProduct: recommend,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    apiMaster
      .getReviewMetaData(this.props.currentProductId)
      .then(({ data }) => {
        this.setState({
          currentRating: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getRatings(reviewsArray) {
    return reviewsArray.map((review) => {
      return review.rating;
    });
  }

  filterReviews(rating){
    console.log('all reviews', this.state.reviews)
    console.log('this is being send to filterReviews', rating);
    let filteredReviews =[];
    for (var count in rating) {
      let countFilter = this.state.reviews.filter((review) => {
        console.log('should be what I clicked on', count)
        console.log('should be review rating', review.rating)
        return Number(review.rating) === Number(count)
      }) 
      console.log('first filter through', countFilter)
      filteredReviews = filteredReviews.concat(countFilter);
    }
    console.log('sending to state', filteredReviews)
    this.setState({
      filtered: filteredReviews
    }, () => console.log('filtered', this.state.filtered))
  }

  getRecommendation(reviewsArray) {
    let numRec = reviewsArray.reduce((num, review) => {
      if (review.recommend === 1) num++;
      return num;
    }, 0);
    let length = reviewsArray.length;
    return (numRec / length) * 100;
  }

  render() {
    return (
      <div id="reviews-ratings-container">
        RATINGS AND REVIEWS
        <ReviewList
          currentProductCharacteristics={
            this.state.currentRating.characteristics
          }
          currentProductName={this.props.currentProductName}
          reviews={this.state.reviews}
          currentProductID={this.props.currentProductID}
        />
        <RatingsBreakdown
          currentRating={this.state.currentRating}
          recommend={this.state.recommendProduct}
          currentProductRatings={this.state.currentProductRatings}
          currentProductName={this.props.currentProductName}
          currentProductID={this.props.currentProductID}
          averageRating={this.props.averageRating}
          handleFilter={this.filterReviews}
        />
      </div>
    );
  }
}

export default RatingsReviews;
