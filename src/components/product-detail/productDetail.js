import React from "react";
import apiMaster from "../../apiMaster";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
    };
  }

  componentDidMount() {
    apiMaster
      .getProductStyles()
      .then(({ data }) => {
        this.setState({ styles: data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.styles[0] !== undefined ? (
          <img
            id="main-product-photo"
            src={this.state.styles[0].photos[0].url}
          ></img>
        ) : null}
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
