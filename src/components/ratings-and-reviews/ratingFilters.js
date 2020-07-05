import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'


class RatingFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingPercentages: {
                '1': 0, 
                '2': 0, 
                '3': 0, 
                '4': 0, 
                '5': 0
            }
        };
    }
    
    findPercentage(i) {
        let countObj = this.defineCountObj();
        let numOfRatings = this.props.currentProductRatings.length;
        let percentage;
        for (var num in countObj) {
            percentage = countObj[num]/numOfRatings*100;
            countObj[num] = percentage;
        }
        return countObj[i];
    }
    
    defineCountObj() {
        let countObj = this.props.currentProductRatings.reduce((obj, rating) => {
            let string = rating.toString();
            obj[string]++;
            return obj;
        }, {'1':0, '2':0, '3':0, '4':0, '5':0});
        return countObj;
    }

    getReviewsWithRating(i) {
        i = i.toString();
        let countObj = this.defineCountObj();
        return countObj[i];
    }

    render() {
        return (
            <div className='ratings-filters-container'>
                {this.props.currentProductRatings ? <>
                Rating Breakdown <br/>
                {[...Array(5)].map((possibleRating, i) => {
                    return <span id='rating-filter-container'><label className='filter-elem'>{`${i + 1} Stars`}</label><ProgressBar key={i + 1} now={this.findPercentage(i + 1)} className='progress-gray'/><>{'   '}</><small className='filter-elem'>{`${this.getReviewsWithRating(i + 1)} Reviews`}</small></span>;
                }).reverse()}
                </> : null}
            </div>
        );
    }
}

export default RatingFilters;