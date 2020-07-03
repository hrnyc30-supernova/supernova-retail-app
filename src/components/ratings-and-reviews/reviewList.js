import React from 'react';
import ReviewTile from './reviewTile.js';
import MoreReviewsButton from './moreReviewsButton.js';
import AddReviewButton from './addReviewButton.js';
import SortBy from './sortBy.js';
import apiMaster from '../../apiMaster.js';
import axios from 'axios';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            sortedReviews: [], 
            isSorted: false
        };
        this.handleSortByChange = this.handleSortByChange.bind(this);
    }

    handleSortByChange(sortString, id) {
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
                        reviews: data.results,
                        sortedReviews: [],
                        isSorted: false
                    })
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    componentDidMount() {
        apiMaster.getReviewsOfProduct(this.props.currentProductId)
          .then(({ data }) => {
            this.setState({
              reviews: data.results
            })
          })
          .catch(err => {
            console.error(err);
          })
    }

    render() {
        return (
            <>
                {this.state.reviews.length === 0 ? 
                    <div className='review-list-container'>
                        <AddReviewButton /> 
                    </div>
                    : <div className='review-list-container'>
                        <SortBy currentProductID={this.props.currentProductID} onSelect={this.handleSortByChange}/>
                        {this.state.isSorted === false ? 
                            <>
                                {
                                    this.state.reviews.map(review => {
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
                        {this.state.reviews.length > 2 ? <MoreReviewsButton /> : null}
                        <AddReviewButton />
                    </div>
                }           
            </>
        );
    }
}

export default ReviewList;