import React from 'react';
import NewReview from './newReviewModal.js';

class AddReviewButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);          
    }

    showModal() {
        let temp = this.state.show;
        this.setState({
            show: !temp
        })
    }
    render() {
        return(
            <>
                <button onClick={e => this.showModal()}>Add New Review</button>
                <NewReview show={this.state.show} currentProductName={this.props.currentProductName}/> 
            </>
        );
    }
}

export default AddReviewButton;