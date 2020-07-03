import React from 'react';
import Stars from './stars.js';
import MoreReviewsButton from './moreReviewsButton.js';
import AddReviewButton from './addReviewButton.js';
import SortBy from './sortBy.js';
import apiMaster from '../../apiMaster.js';

class RatingsBreakdown extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            currentRating: {}
        }
    }

    componentDidMount() {
        apiMaster.getReviewMetaData(this.props.currentProductId)
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    currentRating: data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    getCharacteristics() {
        if (this.state.currentRating.characteristics !== undefined) {
            let chars = Object.keys(this.state.currentRating.characteristics);
            console.log('should be an array', chars);
            let charString = chars.join(', ');
            return charString;
        } else {
            return null;
        }
    }
    render() {
        return (
            <div className='ratings-breakdown-container'>Current Product Rating Breakdown: 
                <p>{this.getCharacteristics()}</p>
                <Stars rating={this.props.averageRating} />
            </div>
        );
    }
}

export default RatingsBreakdown;