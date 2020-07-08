import React from "react";
import ReactDOM from "react-dom";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhotoIndex: 0,
      photoContainerWidth: "photo-container-standard",
      mouseCoordinates: null,
      zoomedImageDims: null,
    };

    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleProductPhotoExpand = this.handleProductPhotoExpand.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedStyle !== this.props.selectedStyle) {
      this.setState({
        selectedPhotoIndex: 0,
      });
    }
  }

  handleLeftArrowClick() {
    if (this.state.selectedPhotoIndex === 0) {
      this.setState({
        selectedPhotoIndex: this.props.selectedStyle.photos.length - 1,
      });
    } else {
      this.setState({
        selectedPhotoIndex: this.state.selectedPhotoIndex - 1,
      });
    }
  }

  handleRightArrowClick() {
    if (
      this.props.selectedStyle.photos.length ===
      this.state.selectedPhotoIndex + 1
    ) {
      this.setState({
        selectedPhotoIndex: 0,
      });
    } else {
      this.setState({
        selectedPhotoIndex: this.state.selectedPhotoIndex + 1,
      });
    }
  }

  handleIconClick(index) {
    this.setState({
      selectedPhotoIndex: index,
    });
  }

  handleProductPhotoExpand() {
    if (this.state.photoContainerWidth === "photo-container-standard") {
      this.setState({
        photoContainerWidth: "photo-container-expanded",
      });
    } else {
      this.setState({
        photoContainerWidth: "photo-container-standard",
      });
    }
    this.props.updateTextContainerVisibility();
  }

  handleImgClick() {
    if (this.state.photoContainerWidth === "photo-container-expanded") {
      this.setState({
        photoContainerWidth: "photo-container-zoom",
      });
    } else if (this.state.photoContainerWidth === "photo-container-zoom") {
      this.setState({
        photoContainerWidth: "photo-container-expanded",
      });
    }
  }

  handleMouseMove(e) {
    if ((this.state.photoContainerWidth === "photo-container-zoom") === true) {
      this.setState({
        mouseCoordinates: [e.nativeEvent.layerX, e.nativeEvent.layerY, e],
        zoomedImageDims: [
          Number(
            window
              .getComputedStyle(ReactDOM.findDOMNode(e.target))
              .getPropertyValue("width")
              .split("px")
              .join("")
          ),
          Number(
            window
              .getComputedStyle(ReactDOM.findDOMNode(e.target))
              .getPropertyValue("height")
              .split("px")
              .join("")
          ),
        ],
      });
    }
  }

  render() {
    return (
      <div
        id="product-detail-photo-container"
        className={this.state.photoContainerWidth}
        onMouseMove={(e) => this.handleMouseMove(e)}
      >
        {this.props.selectedStyle !== null ? (
          <img
            id="product-photo-main"
            src={
              this.props.selectedStyle.photos[this.state.selectedPhotoIndex].url
            }
            style={
              this.state.photoContainerWidth === "photo-container-zoom" &&
              this.state.mouseCoordinates
                ? {
                    objectPosition: `${
                      (this.state.mouseCoordinates[0] * 100) /
                      this.state.zoomedImageDims[0]
                    }% ${
                      (this.state.mouseCoordinates[1] * 100) /
                      this.state.zoomedImageDims[1]
                    }%`,
                    overflow: "hidden",
                    transform: "scale(2)",
                    objectFit: "none",
                  }
                : null
            }
            onClick={(e) => this.handleImgClick(e)}
          ></img>
        ) : null}
        <div id="product-photo-icon-container">
          {this.props.selectedStyle !== null
            ? this.props.selectedStyle.photos.map((photo, index) => (
                <div
                  className="product-photo-icon"
                  style={{
                    backgroundImage: `url(${photo.thumbnail_url})`,
                  }}
                  onClick={() => this.handleIconClick(index)}
                >
                  {this.state.selectedPhotoIndex === index ? (
                    <span id="selected-photo-bar"></span>
                  ) : null}
                </div>
              ))
            : null}
        </div>
        <span
          id="product-photo-expand"
          onClick={(event) => this.handleProductPhotoExpand(event)}
        >
          <FaExpand />
        </span>
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
