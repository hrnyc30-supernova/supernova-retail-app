import React from "react";
import StarRatings from "react-star-ratings";

const Stars = props => {
    if (props.allowChange) {
      return (
        <StarRatings
          starEmptyColor="#ebebeb"
          starRatedColor="#525252"
          rating={props.rating}
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
          starEmptyColor="#ebebeb"
          starRatedColor="#525252"
          rating={props.rating}
          starDimension="20px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
      );
    }
}

export default Stars;
