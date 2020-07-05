import React from 'react';
import Stars from './stars.js';
import RatingFilters from './ratingFilters.js';
import apiMaster from '../../apiMaster.js';

const RatingsBreakdown = props => {
        let chars;
        (props.currentRating !== undefined && props.currentRating.characteristics !== undefined) ? chars = props.currentRating.characteristics : chars = null;
        return (
            <div id='ratings-breakdown-container'>Current Product Rating Breakdown: 
            {(props.currentProductRatings && props.averageRating && props.recommend && props.currentRating) ? 
                <><div id='avg-rating'><h1><strong>{Number(props.averageRating).toFixed(1)}</strong></h1><Stars rating={Number(props.averageRating)} /></div>
                <span>{`${props.currentProductRatings.length} Reviews Related to '${props.currentProductName}'`}</span>
                <RatingFilters recommend={props.recommend} currentProductRatings={props.currentProductRatings}/>
                <p>{`${props.recommend}% of reviews recommend this product`}</p>
                <>{
                    chars !== null ? 
                        Object.entries(chars).map(([char, val]) => {
                            return <p key={val.id}>{`${char}: ${val.value}`}</p>
                        })
                        : null
                }</></>
                : null}
            </div>
        );
}

export default RatingsBreakdown;