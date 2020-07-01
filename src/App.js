import React from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import apiMaster from './apiMaster';
import ProductDetailContainer from './containers/product-detail/product-detail-container.js';
import addProductInfo from '/src/actions/sendApiData'
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
      const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(addProductInfo(data)),
  });
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

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    addProductInfo: () => dispatch(addProductInfo(data)),
    decrement: () => dispatch({ type: ‘DECREMENT’ }),
    reset: () => dispatch({ type: ‘RESET’ })
  }
}

export default hot(connect(mapDispatchToProps)(App));
