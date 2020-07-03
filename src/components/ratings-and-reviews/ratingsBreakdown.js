import React from 'react';
import ReviewTile from './reviewTile.js';
import MoreReviewsButton from './moreReviewsButton.js';
import AddReviewButton from './addReviewButton.js';
import SortBy from './sortBy.js';
import apiMaster from '../../apiMaster.js';

class RatingsBreakdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        
    }

    componentDidMount() {
        apiMaster.getReviewMetaData(this.props.currentProductId)
          .then(({ data }) => {
              console.log(data);
            // this.setState({
            //   reviews: data.results
            // })
          })
          .catch(err => {
            console.error(err);
          })
    }

    render() {
        return (
            <div>ratings breakdown component</div>
        );
    }
}

export default RatingsBreakdown;