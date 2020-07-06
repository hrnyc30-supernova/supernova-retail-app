import React from 'react';
import apiMaster from '../../apiMaster';
import { AiFillStar } from 'react-icons/ai';
import ProductCompareModal from './productCompareModal';

class CardActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wasClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ wasClicked: !this.state.wasClicked });
  }

  render() {
    return (
      <>
        <a
          className="action-button"
          href="javascript:void(0);"
          onClick={this.handleClick}
        >
          <AiFillStar />
        </a>
        <ProductCompareModal
          clicked={this.state.wasClicked}
          handleClick={this.handleClick}
        />
      </>
    );
  }
}

export default CardActionButton;
