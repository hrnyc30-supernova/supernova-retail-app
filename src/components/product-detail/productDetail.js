import React from 'react';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.currentProduct.name}</h1>;
  }
}

export default ProductDetail;
