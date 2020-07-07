import React from 'react';
import apiMaster from '../../apiMaster';
import ProductCard from './productCard';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: null,
      relatedItemFeatures: [],
    };

    this.getRelatedIds = this.getRelatedIds.bind(this);
    this.getRelatedItemFeatures = this.getRelatedItemFeatures.bind(this);
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
      .then(() => {
        this.getRelatedItemFeatures();
      })
      .catch((err) => {
        console.log('err in getRelatedIds: ', err);
      });
  }

  getRelatedItemFeatures() {
    let promises = [];
    for (let i = 0; i < this.state.relatedProductIds.length; i++) {
      promises.push(
        apiMaster
          .getProductInfo(this.state.relatedProductIds[i])
          .then((res) => {
            return res.data.features;
          })
      );
    }
    Promise.all(promises)
      .then((data) => {
        this.setState({ relatedItemFeatures: data });
      })
      .catch((err) => {
        console.log(err);
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
          relatedItemFeatures={this.state.relatedItemFeatures}
        />
      </div>
    );
  }
}

export default RelatedItems;
