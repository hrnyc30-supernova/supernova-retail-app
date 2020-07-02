import React from 'react';
import Stars from './stars.js';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return <Stars rating={this.props.averageRating} />;
  }
}

export default RatingsReviews;
