import React from 'react';

const ProductDetail = (props) => {
  return <h1 onClick={props.onClick}>{props.count}</h1>;
};

export default ProductDetail;
