import React from "react";

class AlertBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="alert-bar">
        <span className="alert">
          <em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em>
        </span>
        &mdash;
        <span className="alert">
          SALE / DISCOUNT
          <strong> OFFER</strong>
        </span>
        &mdash;
        <span className="alert">
          <u>NEW PRODUCT HIGHLIGHT</u>
        </span>
      </div>
    );
  }
}

export default AlertBar;
