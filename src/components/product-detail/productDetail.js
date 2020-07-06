import React from "react";
import apiMaster from "../../apiMaster";

import { GrFormCheckmark } from "react-icons/gr";

import PhotoContainer from "./photoContainer.js";
import TextContainer from "./textContainer.js";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      selectedStyle: null,
      textContainerVisibility: "text-container-visible",
    };

    this.updateTextContainerVisibility = this.updateTextContainerVisibility.bind(
      this
    );
    this.updateSelectedStyle = this.updateSelectedStyle.bind(this);
  }

  componentDidMount() {
    apiMaster
      .getProductStyles()
      .then(({ data }) => {
        this.setState({
          styles: data.results,
          selectedStyle: data.results[0],
        });
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

  updateSelectedStyle(index) {
    this.setState({
      selectedStyle: this.state.styles[index],
    });
  }

  render() {
    return (
      <div>
        <div id="product-detail-columns-container">
          <PhotoContainer
            selectedStyle={this.state.selectedStyle}
            updateTextContainerVisibility={this.updateTextContainerVisibility}
          />
          <TextContainer
            product={this.props.product}
            styles={this.state.styles}
            selectedStyle={this.state.selectedStyle}
            userToken={this.props.userToken}
            textContainerVisibility={this.state.textContainerVisibility}
            averageRating={this.props.averageRating}
            updateSelectedStyle={this.updateSelectedStyle}
          />
        </div>
        <div id="product-notes">
          <span id="product-description">
            <div id="product-slogan">
              <strong>{this.props.product.slogan}</strong>
            </div>
            <div>{this.props.product.description}</div>
          </span>
          <span id="product-features">
            <div>
              <span className="product-features-checkmark">
                <GrFormCheckmark />
              </span>
              A feature
            </div>
            <div>
              <span className="product-features-checkmark">
                <GrFormCheckmark />
              </span>
              Another feature
            </div>
            <div>
              <span className="product-features-checkmark">
                <GrFormCheckmark />
              </span>
              Yet another feature
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
