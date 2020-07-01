import React from 'react';
import { hot } from 'react-hot-loader/root';
import ProductDetailContainer from './containers/product-detail/product-detail-container.js';
import { connect } from 'react-redux';
import apiMaster from './apiMaster';
//import widget 2 from './components/questions-and-answers/'
//import widget 2 from './components/ratings-and-review/'
//import widget 2 from './components/related-items-creation/'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    apiMaster.getProductInfo().then(({ data }) => {
      //dispatch data
      console.log(data);
    });

    apiMaster.getRelatedProducts().then(({ data }) => {
      //dispatch data
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <ProductDetailContainer />
      </div>
    );
  }
}

export default hot(connect()(App));
