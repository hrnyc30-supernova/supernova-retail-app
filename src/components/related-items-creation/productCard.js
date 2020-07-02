import React from 'react';
import apiMaster from '../../apiMaster';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: [],
    };
  }

  getCardDetails() {
    let cardDetails = [];
    let promises = [];
    for (let i = 0; i < this.props.relatedProductIds.length; i++) {
      promises.push(
        apiMaster
          .getProductInfo(this.props.relatedProductIds[i])
          .then((info) => cardDetails.push(info.data))
      );
      Promise.all(promises);
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
