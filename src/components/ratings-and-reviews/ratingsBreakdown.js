import React from "react";
import Stars from "./stars.js";
import RatingFilters from "./ratingFilters.js";

const RatingsBreakdown = (props) => {
  let chars;
  props.currentRating !== undefined &&
  props.currentRating.characteristics !== undefined
    ? (chars = props.currentRating.characteristics)
    : (chars = null);
  return (
    <div id="ratings-breakdown-container">
      {props.currentProductRatings &&
      props.averageRating &&
      props.recommend &&
      props.currentRating ? (
        <>
          <div id="avg-rating">
            <h1>
              <strong>{Number(props.averageRating).toFixed(1)}</strong>
            </h1>
            <Stars rating={Number(props.averageRating)} />
          </div>
          <small>{`${props.currentProductRatings.length} Reviews Related to '${props.currentProductName}'`}</small>
          <RatingFilters
            class="ratings-filters-container"
            recommend={props.recommend}
            currentProductRatings={props.currentProductRatings}
            currentRating={props.currentRating}
          />
          <p>{`${props.recommend}% of reviews recommend this product`}</p>
          <RatingFilters
            class="characteristics-ratings-container"
            recommend={props.recommend}
            currentProductRatings={props.currentProductRatings}
            currentRating={props.currentRating}
          />
        </>
      ) : null}
    </div>
  );
};

export default RatingsBreakdown;

{
  /* <span key={i} id='rating-filter-container'><label className='filter-elem'>{`${i + 1} Stars`}</label><ProgressBar now={this.findPercentage(i + 1)} className='progress-gray'/><>{'   '}</><small className='filter-elem'>{`${this.getReviewsWithRating(i + 1)} Reviews`}</small></span>;


chars !== null ? 
                        Object.entries(chars).map(([char, val]) => {
                            return <p key={val.id}>{`${char}: ${val.value}`}</p>
                        })
                        : null */
}
