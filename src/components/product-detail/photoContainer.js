import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 0,
    };

    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
  }

  handleLeftArrowClick() {
    if (this.state.currentPhoto === 0) {
      this.setState({
        currentPhoto: this.props.styles[0].photos.length - 1,
      });
    } else {
      this.setState({
        currentPhoto: this.state.currentPhoto - 1,
      });
    }
  }

  handleRightArrowClick() {
    if (this.props.styles[0].photos.length === this.state.currentPhoto + 1) {
      this.setState({
        currentPhoto: 0,
      });
    } else {
      this.setState({
        currentPhoto: this.state.currentPhoto + 1,
      });
    }
  }

  handleIconClick(index) {
    this.setState({
      currentPhoto: index,
    });
  }

  render() {
    return (
      <div id="product-detail-photo-container">
        {this.props.styles[0] !== undefined ? (
          <img
            id="product-photo-main"
            src={this.props.styles[0].photos[this.state.currentPhoto].url}
          ></img>
        ) : null}
        <div id="product-photo-icon-container">
          {this.props.styles[0] !== undefined
            ? this.props.styles[0].photos.map((photo, index) => (
                <div
                  className="product-photo-icon-frame"
                  onClick={() => this.handleIconClick(index)}
                >
                  <img
                    className="product-photo-icon"
                    src={photo.thumbnail_url}
                  ></img>
                </div>
              ))
            : null}
        </div>
        <span
          className="arrow"
          id="left-arrow"
          onClick={(event) => this.handleLeftArrowClick(event)}
        >
          <FaArrowLeft />
        </span>
        <span
          className="arrow"
          id="right-arrow"
          onClick={(event) => this.handleRightArrowClick(event)}
        >
          <FaArrowRight />
        </span>
      </div>
    );
  }
}

export default PhotoContainer;
