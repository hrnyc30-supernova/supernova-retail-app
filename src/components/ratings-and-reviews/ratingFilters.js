import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stars from './stars.js';
import apiMaster from '../../apiMaster.js';


class RatingFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratingPercentages: {
                1: 0, 
                2: 0, 
                3: 0, 
                4: 0, 
                5: 0
            }
        };
    }

    // findPercentage(i) {
    //     let sum = 0;
    //     let countObj = this.props.currentProductRatings.reduce((obj, rating) => {
    //         console.log('object', obj);
    //         return obj[rating]++;
    //         // let string = rating.toString();
    //         // return obj[string] === undefined ? obj[string] = 1 : obj[string]++;
    //     }, {1:0, 2:0, 3:0, 4:0, 5:0});
    //     let numOfRatings = this.props.currentProductRatings.length;
    //     let percentage;
    //     for (let num in countObj) {
    //         percentage = countObj[num]/numOfRatings;
    //         countObj[num] = percentage;
    //     }
    //     console.log(countObj);
    //     // this.setState({
    //     //     ratingPercentages: countObj
    //     // }, () => {console.log('STATE', this.state.ratingPercentages)});

    // }
    

    render() {
        return (
            <div className='ratings-filters-container'>Rating Breakdown
            {/* <button onClick={this.findPercentage(1)}>Test</button> */}
                {[...Array(5)].map((possibleRating, i) => {
                    return <><ProgressBar key={i + 1} now={this.state.ratingPercentages[i + 1]} /><br/></>;
                })}
            </div>
        );
    }
}

export default RatingFilters;