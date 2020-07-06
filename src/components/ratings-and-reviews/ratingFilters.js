import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import {charScales} from "./constants.js";

class RatingFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingPercentages: {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
      },
    };
    this.getScaleValue = this.getScaleValue.bind(this);
  }

  findPercentage(i) {
    let countObj = this.defineCountObj();
    let numOfRatings = this.props.currentProductRatings.length;
    let percentage;
    for (var num in countObj) {
      percentage = (countObj[num] / numOfRatings) * 100;
      countObj[num] = percentage;
    }
    return countObj[i];
  }

  defineCountObj() {
    let countObj = this.props.currentProductRatings.reduce(
      (obj, rating) => {
        let string = rating.toString();
        obj[string]++;
        return obj;
      },
      { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }
    );
    return countObj;
  }

  getReviewsWithRating(i) {
    i = i.toString();
    let countObj = this.defineCountObj();
    return countObj[i];
  }

  getScaleValue(characteristic, rating) {
    rating = rating.toString();
    console.log('rating', charScales);
    return charScales[characteristic][rating];
  }

  render() {
    let chars;
    this.props.currentRating !== undefined &&
    this.props.currentRating.characteristics !== undefined
      ? (chars = this.props.currentRating.characteristics)
      : (chars = null);
    return (
      <>
        {this.props.class === "ratings-filters-container" ? (
          <div className="ratings-filters-container">
            {this.props.currentProductRatings ? (
              <>
                Rating Breakdown <br />
                {[...Array(5)]
                  .map((possibleRating, i) => {
                    return (
                      <span key={i} id="rating-filter-container">
                        <label className="filter-elem">{`${
                          i + 1
                        } Stars`}</label>
                        <ProgressBar
                          now={this.findPercentage(i + 1)}
                          className="progress-rating"
                        />
                        <>{"   "}</>
                        <small className="filter-elem">{`${this.getReviewsWithRating(
                          i + 1
                        )} Reviews`}</small>
                      </span>
                    );
                  })
                  .reverse()}
              </>
            ) : null}
          </div>
        ) : (
          <div className="characteristics-ratings-container">
            <>
              {chars !== null
                ? Object.entries(chars).map(([char, val]) => {
                    return (
                      <div key={val.id} id="characteristic-rating-container">
                        <label className="filter-elem">
                          {`${char}`}
                          <ProgressBar className="progress-characteristic" />
                        </label>
                        <br />
                        <small>
                          {[1, 5].map((item, i) => {
                            return <span key={i}>{this.getScaleValue(char, item)}</span>;
                          })}
                        </small>
                      </div>
                    );
                  })
                : null}
            </>
          </div>
        )}
      </>
    );
  }
}

export default RatingFilters;
