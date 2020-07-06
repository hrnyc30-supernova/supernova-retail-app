import React from "react";

import Stars from "../ratings-and-reviews/stars.js";
import { GrFormCheckmark } from "react-icons/gr";

class TextContainer extends React.Component {
  constructor(props) {
    super(props);
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
            ${this.props.selectedStyle.original_price}
          </div>
        ) : null}
        <div id="styles-menu">
          <div id="styles-menu-heading">
            <strong>Style ></strong> Selected Style
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
      </div>
    );
  }
}

export default TextContainer;
