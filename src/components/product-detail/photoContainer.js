import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-product-photo-container">
        {this.props.styles[0] !== undefined ? (
          <img
            id="main-product-photo"
            src={this.props.styles[0].photos[0].url}
          ></img>
        ) : null}
        <span className="arrow" id="left-arrow">
          <FaArrowLeft />
        </span>
        <span className="arrow" id="right-arrow">
          <FaArrowRight />
        </span>
      </div>
    );
  }
}

export default PhotoContainer;
