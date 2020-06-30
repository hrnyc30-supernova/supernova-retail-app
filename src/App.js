import React from 'react';
import { hot } from 'react-hot-loader/root';
import ProductDetail from './components/product-detail/product-detail';
import addNumber from './actions/testaction';
import { connect } from 'react-redux';
//import widget 2 from './components/questions-and-answers/'
//import widget 2 from './components/ratings-and-review/'
//import widget 2 from './components/related-items-creation/'

const mapStateToProps = ({ count }) => ({
  count,
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  // render() {
  //   return (
  //     <div>
  //       <ProductDetail />
  //       {/*
  //       <questions-and-answers />
  //       <ratings-and-review />
  //       <related-items-creation /> */}
  //     </div>
  //   );
  onAddClick() {
    // Now we are directly referencing our imported action creator
    // And manually dispatching it with the dispatch prop provided by connect
    this.props.dispatch(addNumber(7));
  }
  render() {
    return (
      <div>
        Count: {this.props.count}
        <button onClick={this.onAddClick}>Add 7!</button>
      </div>
    );
  }
}

export default hot(connect(mapStateToProps)(App));
