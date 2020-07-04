import React from "react";
import apiMaster from "../../apiMaster";

import PhotoContainer from "./photoContainer.js";
import TextContainer from "./textContainer.js";

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
        <PhotoContainer styles={this.state.styles} />
        <TextContainer product={this.props.product} />
      </div>
    );
  }
}

export default ProductDetail;
