import React from 'react';
import apiMaster from '../../apiMaster';

class ProductCompareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidUpdate(prevProps) {
    if (this.props.clicked !== prevProps.clicked) {
      this.setState({ visible: this.props.clicked });
    }
  }

  render() {
    if (this.state.visible) {
      return <div onClick={this.props.handleClick}>Modal Placeholder</div>;
    } else {
      return null;
    }
  }
}

export default ProductCompareModal;
