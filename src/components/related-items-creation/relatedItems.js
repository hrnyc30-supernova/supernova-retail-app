import React from 'react';
import apiMaster from '../../apiMaster';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
    };

    this.getRelatedIds = this.getRelatedIds.bind(this);
  }

  componentDidMount() {
    // console.log('apiMaster: ', apiMaster);
    this.getRelatedIds();
  }

  getRelatedIds() {
    apiMaster
      .getRelatedProducts(this.props.currentProductID)
      .then((ids) => {
        this.setState({ relatedProductIds: ids.data });
      })
      .catch((err) => {
        console.log('err in getRelatedIds: ', err);
      });
  }

  render() {
    return (
      <>
        <h1>Related Products</h1>
        <div>{this.props.currentProductID}</div>
      </>
    );
  }
}

export default RelatedItems;
