import React from 'react';
import Stars from './stars.js';
import RatingFilters from './ratingFilters.js';
import apiMaster from '../../apiMaster.js';

const RatingsBreakdown = props => {
        let chars;
        (props.currentRating !== undefined && props.currentRating.characteristics !== undefined) ? chars = props.currentRating.characteristics : chars = null;
        return (
            <div className='ratings-breakdown-container'>Current Product Rating Breakdown: 
                <p>{Number(props.averageRating).toFixed(1)}</p>
                <div><Stars rating={props.averageRating} /><br/><span>{`${props.currentProductRatings.length} Reviews`}</span></div>
                <RatingFilters recommend={props.recommend} currentProductRatings={props.currentProductRatings}/>
                <p>{`${props.recommend}% of reviews recommend this product`}</p>
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

export default RatingsBreakdown;