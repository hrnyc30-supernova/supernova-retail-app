import React from "react";
import ReactDOM from "react-dom";

import { FaArrowLeft, FaThList } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FaExpand } from "react-icons/fa";

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotoIcons: [],
      morePhotoIconsAvailable: false,
      movedToNextPhotoIconPage: false,
      currentPageOfIcons: 0,
      selectedPhotoIndex: 0,
      photoContainerWidth: "photo-container-standard",
      mouseCoordinates: null,
      zoomedImageDims: null,
    };

    this.paginatePhotoIcons = this.paginatePhotoIcons.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleUpChevronClick = this.handleUpChevronClick.bind(this);
    this.handleDownChevronClick = this.handleDownChevronClick.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleProductPhotoExpand = this.handleProductPhotoExpand.bind(this);
  }

  componentDidMount() {
    this.paginatePhotoIcons();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedStyle !== this.props.selectedStyle) {
      this.paginatePhotoIcons();
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

  paginatePhotoIcons() {
    if (this.props.selectedStyle != undefined) {
      if (this.state.addedPhotos === []) {
        var addedPhotos = [];
        this.props.selectedStyle.photos.map((photo) => addedPhotos.push(photo));
      }

      if (addedPhotos.length > 7) {
        var firstSevenPhotos = addedPhotos.slice(0, 7);
        this.setState({
          morePhotoIconsAvailable: true,
        });
      }
      this.setState({
        currentPhotoIcons: firstSevenPhotos || addedPhotos,
      });
    }
  }

  handleUpChevronClick() {}

  handleDownChevronClick() {
    this.setState({
      movedToNextPhotoIconPage: true,
      currentPageOfIcons: this.state.currentPageOfIcons + 1,
    });
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
      >
        {this.props.selectedStyle != undefined ? (
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
            onMouseMove={(e) => this.handleMouseMove(e)}
            onClick={(e) => this.handleImgClick(e)}
          ></img>
        ) : null}
        <div id="product-photo-icon-container">
          {this.state.currentPhotoIcons != []
            ? this.state.currentPhotoIcons.map((photo, index) => (
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
          className="photo-selector-arrows"
          id="left-arrow"
          onClick={(event) => this.handleLeftArrowClick(event)}
        >
          <FaArrowLeft />
        </span>
        <span
          className="photo-selector-arrows"
          id="right-arrow"
          onClick={(event) => this.handleRightArrowClick(event)}
        >
          <FaArrowRight />
        </span>
        {this.props.selectedStyle != undefined &&
        this.props.selectedStyle.photos.length > 7 &&
        this.state.movedToNextPhotoIconPage === true ? (
          <span
            className="photo-selector-chevrons"
            id="up-chevron"
            onClick={(event) => this.handleUpChevronClick(event)}
          >
            <FiChevronUp />
          </span>
        ) : null}
        {this.props.selectedStyle != undefined &&
        this.props.selectedStyle.photos.length > 7 &&
        this.state.morePhotoIconsAvailable === true ? (
          <span
            className="photo-selector-chevrons"
            id="down-chevron"
            onClick={(event) => this.handleDownChevronClick(event)}
          >
            <FiChevronDown />
          </span>
        ) : null}
      </div>
    );
  }
}

export default PhotoContainer;
