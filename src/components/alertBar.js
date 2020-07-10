import React from 'react';

const AlertBar = (props) => {
  return (
    <div id="alert-bar">
      <span className="alert-bar-message">
        <em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em>
      </span>
      &mdash;
      <span className="alert-bar-message">
        SALE / DISCOUNT
        <strong> OFFER</strong>
      </span>
      &mdash;
      <span className="alert-bar-message">
        <u>NEW PRODUCT HIGHLIGHT</u>
      </span>
    </div>
  );
};

export default AlertBar;
