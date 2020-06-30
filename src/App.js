import React from 'react';
import { hot } from 'react-hot-loader/root';
import ProductDetailContainer from './containers/product-detail/product-detail-container.js';
import { connect } from 'react-redux';
//import widget 2 from './components/questions-and-answers/'
//import widget 2 from './components/ratings-and-review/'
//import widget 2 from './components/related-items-creation/'

const App = () => (
  <div>
    <ProductDetailContainer />
  </div>
);

export default hot(connect()(App));
