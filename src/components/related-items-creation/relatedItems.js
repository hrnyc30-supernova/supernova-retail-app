import React from 'react';
import apiMaster from '../../apiMaster';
import ProductCard from './productCard';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: null,
    };

    this.getRelatedIds = this.getRelatedIds.bind(this);
  }

  componentDidMount() {
    // console.log('apiMaster: ', apiMaster);
    // console.log('this.props: ', this.props);
    this.getRelatedIds();
  }

  getRelatedIds() {
    apiMaster
      .getRelatedProducts(this.props.currentProductID)
      .then((ids) => {
        this.setState({
          relatedProductIds: ids.data,
        });
      })
      // .then(() => {
      //   console.log('state: ', this.state);
      // })
      .catch((err) => {
        console.log('err in getRelatedIds: ', err);
      });
  }

  render() {
    return (
      <div className="related-products-container">
        <h1>Related Products</h1>
        <ProductCard
          relatedProducts={this.state.relatedProductIds}
          currentProductId={this.props.currentProductID}
          currentProductFeatures={this.props.currentProductFeatures}
        />
      </div>
    );
  }
}

export default RelatedItems;
