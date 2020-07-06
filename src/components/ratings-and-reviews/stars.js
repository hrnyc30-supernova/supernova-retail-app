import React from "react";
import StarRatings from "react-star-ratings";

const Stars = props => {
    if (props.allowChange) {
      return (
        <StarRatings
          rating={props.rating}
          starRatedColor="#ffd500"
          starDimension="20px"
          starSpacing="1px"
          changeRating={(e) => props.handleChange(e)}
          numberOfStars={5}
          name="rating"
        />
      );
    } else {
      return (
        <StarRatings
          rating={props.rating}
          starRatedColor="#ffd500"
          starDimension="20px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
      );
    }
}

export default Stars;
