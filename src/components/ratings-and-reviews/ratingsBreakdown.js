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
        console.log(this.state.currentRating);
        let chars;
        if (this.state.currentRating === undefined) {
            chars = null;
        } else if (this.state.currentRating.characteristics !== undefined) {
            chars = this.state.currentRating.characteristics
        } else {
            chars = null;
        }
        console.log('should be null', chars)
        return (
            <div className='ratings-breakdown-container'>Current Product Rating Breakdown: 
                {
                    chars !== null ? 
                        Object.entries(chars).map(([key, val]) => {
                            console.log('this is the key', key);
                            console.log('this is the val', val);
                            return <p key={val.id}>{`${key}: ${val.value}`}</p>
                        })
                        : null
                }
                <Stars rating={this.props.averageRating} />
            </div>
        );
    }
}

export default RatingsBreakdown;