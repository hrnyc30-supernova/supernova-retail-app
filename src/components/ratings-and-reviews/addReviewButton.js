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
                {this.state.show ? 
                    <NewReview toggleModal={this.showModal} currentProductCharacteristics={this.props.currentProductCharacteristics} show={this.state.show} currentProductName={this.props.currentProductName}/> 
                    : null}
            </>
        );
    }
}

export default AddReviewButton;