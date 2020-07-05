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
            sortedReviews: [], 
            isSorted: false, 
            count: 2
        };
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.showMoreReviews = this.showMoreReviews.bind(this);
    }

    handleSortByChange(sortString) {
        apiMaster.getReviewsOfProduct(this.props.currentProductId, sortString, this.state.count)
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

    showMoreReviews() {
        let tempCount = this.state.count + 2;
        this.setState({
            count: tempCount
        })
    }

    render() {
        let reviewsToShow = this.state.isSorted === true ? this.state.sortedReviews : this.props.reviews.slice(0, this.state.count);
        return (
            <div id='review-list-container'>
                {this.props.reviews.length === 0 ? 
                    <div> There are currently no reviews for this product <br/>
                    <AddReviewButton currentProductCharacteristics={this.props.currentProductCharacteristics} currentProductName={this.props.currentProductName}/> </div>: <>
                        <SortBy currentProductID={this.props.currentProductID} onSelect={this.handleSortByChange}/>
                        {
                            reviewsToShow.map(review => {
                                return <ReviewTile key={review.review_id} review={review}/>
                            })
                        }
                        {this.state.count < this.props.reviews.length ? <MoreReviewsButton showMoreReviews={this.showMoreReviews}/> : null}
                        <AddReviewButton currentProductCharacteristics={this.props.currentProductCharacteristics} currentProductName={this.props.currentProductName}/>
                </>
                }           
            </div>
        );
    }
}

export default ReviewList;


