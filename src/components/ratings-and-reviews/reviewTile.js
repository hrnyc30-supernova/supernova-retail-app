import React from 'react';
import Stars from './stars.js';
import moment from 'moment';

class ReviewTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}; 
    }

    render() {
        console.log(this.props);
        let date = moment(this.props.review.date).format("MMMM D, YYYY");
        return(
            <div className='review-tile-container'>
                <Stars averageRating={this.props.review.rating}/>
                <p>{`${this.props.review.reviewer_name}, ${date}`}</p>
                <p>{this.props.review.summary}</p>
                <p>{this.props.review.body}</p>
                {this.props.review.photos.length > 0 ? <img src={this.props.review.photos[0].url}/> : null}
                <p>{this.props.review.recommend === 0 ? 'I recommend this product' : null}</p>
                <p>{this.props.review.response === null ? null : this.props.review.response}</p>
                <p>{this.props.review.helpfulness}</p>
            </div>
        );
    }
}

export default ReviewTile;