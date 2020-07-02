import React from "react";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="product-category">
          {this.props.currentProduct.category}
        </div>
        <h1 className="product-title">{this.props.currentProduct.name}</h1>
        <div className="product-price">
          ${this.props.currentProduct.default_price}
        </div>
      </div>
    );
  }
}

export default ProductDetail;
