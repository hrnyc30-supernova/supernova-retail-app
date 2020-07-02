import React from 'react';
import apiMaster from '../../apiMaster';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: [],
    };

    this.getCardDetails = this.getCardDetails.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.relatedProducts !== prevProps.relatedProducts) {
      console.log('props: ', this.props.relatedProducts);
      this.getCardDetails();
    }
  }

  getCardDetails() {
    // let cardDetails = [];
    for (let i = 0; i < this.props.relatedProducts.length; i++) {
      apiMaster
        .getProductInfo(this.props.relatedProducts[i])
        .then((info) => {
          this.setState((prevState) => ({
            cardDetails: [...prevState.cardDetails, info.data],
          }));
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log('cardDetails: ', i, cardDetails);
    }
  }

  render() {
    // console.log('props: ', this.props);
    return (
      <>
        <p>This will be a product card</p>
      </>
    );
  }
}

export default ProductCard;
