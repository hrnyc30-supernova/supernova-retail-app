import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Stars from './stars.js';
import apiMaster from '../../apiMaster.js';


class RatingFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div className='ratings-filters-container'>Rating Breakdown
                {[...Array(5)].map(possibleRating => {
                    console.log('represents one progrss bar')
                    return <ProgressBar now={60} />;
                })}
            </div>
        );
    }
}

export default RatingFilters;