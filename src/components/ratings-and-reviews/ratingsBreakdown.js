import React from "react";
import Stars from "./stars.js";
import RatingFilters from "./ratingFilters.js";

const RatingsBreakdown = ({currentRating, recommend, currentProductRatings, currentProductName, currentProductID, averageRating, handleFilter}) => {
  let chars;
  currentRating !== undefined &&
  currentRating.characteristics !== undefined
    ? (chars = currentRating.characteristics)
    : (chars = null);
  return (
    <div id="ratings-breakdown-container">
      {currentProductRatings &&
      averageRating &&
      (recommend === 0 || recommend) &&
      currentRating ? (
        <>
          <div id="avg-rating">
            <h1>
              <strong>{Number(averageRating).toFixed(1)}</strong>
            </h1>
            <Stars rating={Number(averageRating)} />
          </div>
          <small>{`${currentProductRatings.length} Reviews of this product`}</small>
          <RatingFilters
            class="ratings-filters-container"
            recommend={recommend}
            currentProductRatings={currentProductRatings}
            currentRating={currentRating}
            handleFilter={handleFilter}
          />
          <small>{`${recommend.toFixed(0)}% of reviews recommend this product`}</small> <br/>
          <RatingFilters
            class="characteristics-ratings-container"
            recommend={recommend}
            currentProductRatings={currentProductRatings}
            currentRating={currentRating}
            handleFilter={handleFilter}
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
