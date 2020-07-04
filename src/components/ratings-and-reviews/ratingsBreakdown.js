import React from 'react';
import Stars from './stars.js';
import RatingFilters from './ratingFilters.js';
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
                <p>{Number(this.props.averageRating).toFixed(1)}</p>
                <div><Stars rating={this.props.averageRating} /><br/><span>{`${this.props.currentProductRatings.length} Reviews`}</span></div>
                <RatingFilters recommend={this.props.recommend} currentProductRatings={this.props.currentProductRatings}/>
                <p>{`${this.props.recommend}% of reviews recommend this product`}</p>
                {
                    chars !== null ? 
                        Object.entries(chars).map(([char, val]) => {
                            return <p key={val.id}>{`${char}: ${val.value}`}</p>
                        })
                        : null
                }
            </div>
        );
    }
}

export default RatingsBreakdown;