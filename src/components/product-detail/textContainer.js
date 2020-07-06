import React from "react";
import apiMaster from "../../apiMaster";

import Stars from "../ratings-and-reviews/stars.js";
import { GrFormCheckmark } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

class TextContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bagMessage: "Add to Bag",
      bagIcon: <FiPlus />,
      favoriteStatus: false,
      favoriteIcon: <AiOutlineStar />,
    };

    this.handleAddToBag = this.handleAddToBag.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleAddToBag() {
    console.log(parseInt(this.props.userToken));
    console.log(this.props.product.id);
    var tokenAsNum = parseInt(this.props.userToken);
    apiMaster
      .addToCart(tokenAsNum, this.props.product.id)
      .then(() => {
        this.setState({
          bagMessage: "Added",
          bagIcon: <GrFormCheckmark />,
        });
        setTimeout(
          () =>
            this.setState({ bagMessage: "Add to Bag", bagIcon: <FiPlus /> }),
          3000
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleFavorite() {
    if (this.state.favoriteStatus === false) {
      this.setState({
        favoriteStatus: true,
        favoriteIcon: <AiFillStar />,
      });
    } else {
      this.setState({
        favoriteStatus: false,
        favoriteIcon: <AiOutlineStar />,
      });
    }
  }

  render() {
    return (
      <div
        id="product-detail-text-container"
        className={this.props.textContainerVisibility}
      >
        <Stars rating={this.props.averageRating} />
        <a href="#reviews-ratings-container" id="reviews-link">
          Read all reviews
        </a>
        <div id="product-category">{this.props.product.category}</div>
        <div id="product-name">{this.props.product.name}</div>
        {this.props.selectedStyle !== null ? (
          <div id="product-price">
            {this.props.selectedStyle !== null &&
            this.props.selectedStyle.sale_price != 0 &&
            this.props.selectedStyle.sale_price !==
              this.props.selectedStyle.original_price ? (
              <span>
                <span id="overridden-price">
                  ${this.props.selectedStyle.original_price}
                </span>
                ${this.props.selectedStyle.sale_price}
              </span>
            ) : (
              <span>${this.props.selectedStyle.original_price}</span>
            )}
          </div>
        ) : null}
        <div id="styles-menu">
          <div id="styles-menu-heading">
            <strong>STYLE ></strong>
            {this.props.selectedStyle !== null ? (
              <span> {this.props.selectedStyle.name}</span>
            ) : null}
          </div>
          <div id="product-style-icon-container">
            {this.props.styles !== []
              ? this.props.styles.map((style, index) => (
                  <div
                    className="product-style-icon"
                    style={{
                      backgroundImage: `url(${style.photos[0].thumbnail_url})`,
                    }}
                    onClick={() => this.props.updateSelectedStyle(index)}
                  >
                    {this.props.selectedStyle === style ? (
                      <span>
                        <span id="selected-style-checkmark-frame"></span>
                        <span id="selected-style-checkmark">
                          <GrFormCheckmark />
                        </span>
                      </span>
                    ) : null}
                  </div>
                ))
              : null}
          </div>
        </div>
        <span className="main-action-button" id="size-selector">
          Select Size
          <span className="main-action-button-symbol main-action-button-symbol-floated">
            <FiChevronDown />
          </span>
        </span>
        <span className="main-action-button" id="quantity-selector">
          1
          <span className="main-action-button-symbol main-action-button-symbol-floated">
            <FiChevronDown />
          </span>
        </span>
        <span
          className="main-action-button"
          id="add-to-bag-button"
          onClick={(event) => this.handleAddToBag(event)}
        >
          {this.state.bagMessage}
          <span className="main-action-button-symbol main-action-button-symbol-floated">
            {this.state.bagIcon}
          </span>
        </span>
        <span
          className="main-action-button"
          id="favorite-button"
          onClick={(event) => this.handleFavorite(event)}
        >
          <span className="main-action-button-symbol">
            {this.state.favoriteIcon}
          </span>
        </span>
      </div>
    );
  }
}

export default TextContainer;
