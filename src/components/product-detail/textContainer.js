import React from "react";

class TextContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="product-detail-text-container">
        <div className="product-category">{this.props.product.category}</div>
        <h1 className="product-title">{this.props.product.name}</h1>
        <div className="product-price">${this.props.product.default_price}</div>
      </div>
    );
  }
}

export default TextContainer;
