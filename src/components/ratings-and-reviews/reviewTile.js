import React from 'react';
import Stars from './stars.js';
import moment from 'moment';

class ReviewTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAll: false
        }; 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let temp = this.state.showAll;
        this.setState({
            showAll: !temp
        })
    }

    render() {
        let date = moment(this.props.review.date).format("MMMM D, YYYY");
        return(
            <div className='review-tile-container'>
                <Stars rating={this.props.review.rating}/>
                <p>{`${this.props.review.reviewer_name}, ${date}`}</p>
                <p><strong>{this.props.review.summary.length <= 60 ? this.props.review.summary : this.props.review.summary.slice(0, 61)}</strong></p>
                <p>{this.props.review.body.length <= 50 ? this.props.review.body : (<span onClick={this.handleClick}>Show More</span>)}</p>
                {this.props.review.photos.length > 0 ? <img src={this.props.review.photos[0].url}/> : null}
                <p>{this.props.review.recommend === 0 ? 'I recommend this product' : null}</p>
                <p>{this.props.review.response === null ? null : ('Response:', this.props.review.response)}</p>
                <p>Helpful? ({this.props.review.helpfulness})    |    Report Link HERE</p>
            </div>
        );
    }
}

export default ReviewTile;