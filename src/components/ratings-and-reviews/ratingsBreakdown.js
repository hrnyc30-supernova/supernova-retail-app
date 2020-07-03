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
        };
    }

    componentDidMount() {
        apiMaster.getReviewMetaData(this.props.currentProductId)
            .then(({ data }) => {
                this.setState({
                    currentRating: data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        let chars;
        (this.state.currentRating !== undefined && this.state.currentRating.characteristics !== undefined) ? chars = this.state.currentRating.characteristics : chars = null;
        return (
            <div className='ratings-breakdown-container'>Current Product Rating Breakdown: 
                {
                    chars !== null ? 
                        Object.entries(chars).map(([char, val]) => {
                            return <p key={val.id}>{`${char}: ${val.value}`}</p>
                        })
                        : null
                }
                <Stars rating={this.props.averageRating} />
            </div>
        );
    }
}

export default RatingsBreakdown;