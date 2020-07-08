import React from "react";
import Stars from "./stars.js";
import RatingFilters from "./ratingFilters.js";

class RatingsBreakdown extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {

  }

  render() {
    console.log('this is the rating that is being sent down to ratingsbreakdown', this.props.recommend)
    // console.log('this is the rating that is being sent down to ratingsbreakdown', this.props.currentRating)
    // console.log('this is the rating that is being sent down to ratingsbreakdown', this.props.currentRating)
    let chars;
    this.props.currentRating !== undefined &&
    this.props.currentRating.characteristics !== undefined
      ? (chars = this.props.currentRating.characteristics)
      : (chars = null);
    return (
      <div id="ratings-breakdown-container">
        {this.props.currentProductRatings &&
        this.props.averageRating &&
        this.props.recommend &&
        this.props.currentRating ? (
          <>
            <div id="avg-rating">
              <h1>
                <strong>{Number(this.props.averageRating).toFixed(1)}</strong>
              </h1>
              <Stars rating={Number(this.props.averageRating)} />
            </div>
            <small>{`${this.props.currentProductRatings.length} Reviews of this product`}</small>
            <RatingFilters
              class="ratings-filters-container"
              recommend={this.props.recommend}
              currentProductRatings={this.props.currentProductRatings}
              currentRating={this.props.currentRating}
              handleFilter={this.props.handleFilter}
            />
            <small>{`${this.props.recommend.toFixed(2)}% of reviews recommend this product`}</small>
            <RatingFilters
              class="characteristics-ratings-container"
              recommend={this.props.recommend}
              currentProductRatings={this.props.currentProductRatings}
              currentRating={this.props.currentRating}
              handleFilter={this.props.handleFilter}
            />
          </>
        ) : null}
      </div>
    );
  }
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
