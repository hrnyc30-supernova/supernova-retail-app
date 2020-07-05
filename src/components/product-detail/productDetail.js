import React from "react";
import apiMaster from "../../apiMaster";

import PhotoContainer from "./photoContainer.js";
import TextContainer from "./textContainer.js";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      textContainerVisibility: "text-container-visible",
    };

    this.updateTextContainerVisibility = this.updateTextContainerVisibility.bind(
      this
    );
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

  updateTextContainerVisibility() {
    if (this.state.textContainerVisibility === "text-container-visible") {
      this.setState({
        textContainerVisibility: "text-container-hidden",
      });
    } else {
      this.setState({
        textContainerVisibility: "text-container-visible",
      });
    }
  }

  render() {
    return (
      <div>
        <div id="product-detail-columns-container">
          <PhotoContainer
            styles={this.state.styles}
            updateTextContainerVisibility={this.updateTextContainerVisibility}
          />
          <TextContainer
            product={this.props.product}
            textContainerVisibility={this.state.textContainerVisibility}
            averageRating={this.props.averageRating}
          />
        </div>
        <div id="product-description">Description goes here.</div>
      </div>
    );
  }
}

export default ProductDetail;
