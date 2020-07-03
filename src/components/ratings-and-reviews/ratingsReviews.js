import React from 'react';
import ReviewList from './reviewList.js';
import RatingsBreakdown from './ratingsBreakdown.js';
import apiMaster from '../../apiMaster.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
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
      <div className='reviews-ratings-container'>RATINGS AND REVIEWS
        <ReviewList reviews={this.state.reviews} currentProductID={this.props.currentProductID}/>
        <RatingsBreakdown currentProductID={this.props.currentProductID} averageRating={this.props.averageRating} />
      </div>
    );
  }
} 

export default RatingsReviews;
