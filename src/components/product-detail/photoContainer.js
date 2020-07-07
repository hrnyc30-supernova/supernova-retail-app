import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhotoIndex: 0,
      photoContainerWidth: "photo-container-standard",
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

  render() {
    return (
      <div
        id="product-detail-photo-container"
        className={this.state.photoContainerWidth}
      >
        {this.props.selectedStyle !== null ? (
          <img
            id="product-photo-main"
            src={
              this.props.selectedStyle.photos[this.state.selectedPhotoIndex].url
            }
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
