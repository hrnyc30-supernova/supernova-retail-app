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
            reviews: [],
            sortedReviews: [], 
            isSorted: false
        };
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.filterReviewsByDate = this.filterReviewsByDate.bind(this);
        this.filterReviewsByHelpfulness = this.filterReviewsByHelpfulness.bind(this);
    }
    
    filterReviewsByDate() {
        return this.state.reviews.sort(function(a, b) {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date)
            return dateB - dateA;
        });
    }
    
    filterReviewsByHelpfulness() {
        return this.state.reviews.sort(function(a, b) {
            return b.helpfulness - a.helpfulness;
        });
    }

    handleSortByChange(sortString) {
        let reviewsToRender;
        if (sortString === 'date' || sortString === 'helpfulness') {
            (sortString === 'date') ? reviewsToRender = this.filterReviewsByDate() : reviewsToRender = this.filterReviewsByHelpfulness();
            this.setState({
                sortedReviews: reviewsToRender,
                isSorted: true  
            });
        } else {
            this.setState({
                sortedReviews: [],
                isSorted: false
            })
        }
    }

    componentDidMount() {
        apiMaster.getReviewsOfProduct(this.props.currentProductId)
          .then(({ data }) => {
            data.results.sort((a, b) => {
                let dateA = new Date(a.date);
                let dateB = new Date(b.date);
                if (dateB - dateA === 0) {
                    return b.helpfulness - a.helpfulness;
                } 
                if (dateB - dateA === 1 && a.helpfulness >= 4) {
                    return a.helpfulness - b.helpfulness;
                }
                return dateB - dateA;
            });
            this.setState({
              reviews: data.results
            }, () => {
                console.log('check state', this.state.reviews);
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
                        <SortBy onSelect={this.handleSortByChange}/>
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

// return(
//     <div className='review-list-container'>
//         {this.state.reviews.length === 0 ? null :
//                 this.state.reviews.map(review => {
//                     console.log('review object', review);
//                     return <ReviewTile key={review.review_id} review={review}/>
//                 })
//         }
//         {this.state.reviews.length > 2 ? <MoreReviewsButton /> : null}
//         <AddReviewButton />
//     </div>
// );


// let temp = this.state.reviews;
        // let filtered = temp.sort((a, b) => {
        //     let key = sortString.toString();
        //     console.log('key we are searching for', key);
        //     let sort = b[key] - a[key];
        //     console.log('sort', sort);
        // })
        // console.log('filtered reviews array', filtered);
        // return filtered;