import React from 'react';
import ReviewTile from './reviewTile.js';
import MoreReviewsButton from './moreReviewsButton.js';
import AddReviewButton from './addReviewButton.js';
import SortBy from './sortBy.js';
import apiMaster from '../../apiMaster.js';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedReviews: [], 
            isSorted: false
        };
        this.handleSortByChange = this.handleSortByChange.bind(this);
    }

    handleSortByChange(sortString) {
        apiMaster.getReviewsOfProduct(this.props.currentProductId, sortString)
            .then(({ data }) => {
                if (sortString === 'newest') {
                    data.results.sort((a, b) => {
                        let dateA = new Date(a.date);
                        let dateB = new Date(b.date);
                        return dateB - dateA;
                    });
                }
                if(sortString === 'newest' || sortString === 'helpful') {
                    this.setState({
                        sortedReviews: data.results, 
                        isSorted: true
                    })
                } else {
                    this.setState({
                        sortedReviews: [],
                        isSorted: false
                    })
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <>
                {this.props.reviews.length === 0 ? 
                    <div className='review-list-container'>
                        <AddReviewButton /> 
                    </div>
                    : <div className='review-list-container'>
                        <SortBy currentProductID={this.props.currentProductID} onSelect={this.handleSortByChange}/>
                        {this.state.isSorted === false ? 
                            <>
                                {
                                    this.props.reviews.map(review => {
                                        return <ReviewTile key={review.review_id} review={review}/>
                                    })
                                }
                            </> :
                            <>
                                {
                                    this.state.sortedReviews.map(review => {
                                        return <ReviewTile key={review.review_id} review={review}/>
                                    })
                                }
                            </>
                        }
                        {this.props.reviews.length > 2 ? <MoreReviewsButton /> : null}
                        <AddReviewButton />
                    </div>
                }           
            </>
        );
    }
}

export default ReviewList;