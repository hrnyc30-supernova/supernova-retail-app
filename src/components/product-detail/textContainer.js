import React from "react";
import Stars from "../ratings-and-reviews/stars.js";

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
        <div id="product-price">${this.props.product.default_price}</div>
        <div id="styles-menu">
          <div id="styles-menu-heading">
            <strong>Style ></strong> Selected Style
          </div>
          <div id="product-style-icon-container">
            {this.props.styles !== []
              ? this.props.styles.map((style) => (
                  <div
                    className="product-style-icon"
                    style={{
                      backgroundImage: `url(${style.photos[0].thumbnail_url})`,
                    }}
                  ></div>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default TextContainer;
