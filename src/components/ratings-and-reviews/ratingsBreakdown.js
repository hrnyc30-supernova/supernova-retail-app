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
            currentRating: {},
            characteristics: []
        };
        this.getCharacteristics = this.getCharacteristics.bind(this);
    }

    componentDidMount() {
        apiMaster.getReviewMetaData(this.props.currentProductId)
            .then(({ data }) => {
                let chars = this.getCharacteristics();
                this.setState({
                    currentRating: data,
                    characteristics: chars
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    getCharacteristics() {
        let chars
        if (this.state.currentRating.characteristics !== undefined) {
            let chars = Object.keys(this.state.currentRating.characteristics);
            let charString = chars.join(', ');
            return charString;
        } 
        return null;
    }

    render() {
        console.log(this.state.currentRating.characteristics);
        let chars = this.state.currentRating.characteristics;
        return (
            <div className='ratings-breakdown-container'>Current Product Rating Breakdown: 
                <p>{chars !== undefined ? (chars.Size !== undefined ? `Size: ${chars.Size.value}` : 'Does not have a size') : null}</p>
                <p>{chars !== undefined ? (chars.Fit !== undefined ? `Fit: ${chars.Fit.value}` : 'Does not have a Fit') : null}</p>
                <p>{chars !== undefined ? (chars.Length !== undefined ? `Length: ${chars.Length.value}` : 'Does not have a Length') : null}</p>
                <p>{chars !== undefined ? (chars.Quality !== undefined ? `Quality: ${chars.Quality.value}` : 'Does not have a Quality') : null}</p>
                <p>{chars !== undefined ? (chars.Comfort !== undefined ? `Comfort: ${chars.Comfort.value}` : 'Does not have a Comfort') : null}</p>
                <Stars rating={this.props.averageRating} />
            </div>
        );
    }
}

export default RatingsBreakdown;