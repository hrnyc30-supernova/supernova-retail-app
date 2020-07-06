import React from "react";
import StarRatings from "react-star-ratings";

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
    };
    this.changeRating = this.changeRating.bind(this);
  }

  changeRating(e) {
    e = Number(e);
    this.setState({
      rating: e,
    });
  }

  render() {
    if (this.props.allowChange) {
      return (
        <StarRatings
          rating={this.props.rating}
          starEmptyColor="#ebebeb"
          starRatedColor="#525252"
          starDimension="20px"
          starSpacing="1px"
          changeRating={(e) => this.changeRating(e)}
          numberOfStars={5}
          name="rating"
        />
      );
    } else {
      return (
        <StarRatings
          rating={this.props.rating}
          starEmptyColor="#ebebeb"
          starRatedColor="#525252"
          starDimension="20px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
      );
    }
  }
}

export default Stars;
