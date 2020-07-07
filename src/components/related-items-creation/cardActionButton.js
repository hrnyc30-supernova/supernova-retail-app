import React from 'react';
import apiMaster from '../../apiMaster';
import { AiFillStar } from 'react-icons/ai';
import ProductCompareModal from './productCompareModal';

class CardActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasClicked: false,
      characteristicsList: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.createCombinedCharacteristics = this.createCombinedCharacteristics.bind(
      this
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.createCombinedCharacteristics();
    }
  }

  handleClick() {
    this.setState({ wasClicked: !this.state.wasClicked });
  }

  async createCombinedCharacteristics() {
    let combinedFeatures = [];
    for (let i = 0; i < this.props.currentProductFeatures.length; i++) {
      combinedFeatures.push(
        this.props.currentProductFeatures[i].value +
          ' ' +
          this.props.currentProductFeatures[i].feature
      );
    }
    for (let i = 0; i < this.props.relatedProductFeatures.length; i++) {
      let valueText, featureText;
      if (this.props.relatedProductFeatures[i].value === 'null') {
        valueText = '';
      } else {
        valueText = this.props.relatedProductFeatures[i].value + ' ';
      }
      if (this.props.relatedProductFeatures[i].feature === 'null') {
        featureText = '';
      } else {
        featureText = this.props.relatedProductFeatures[i].feature;
      }
      combinedFeatures.push(valueText + featureText);
    }
    console.log('combinedFeatures: ', combinedFeatures);
    const uniqueFeatures = await new Set(combinedFeatures);
    const uniqueFeaturesArray = Array.from(uniqueFeatures);
    this.setState({
      characteristicsList: uniqueFeaturesArray,
    });
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
          characteristicsList={this.state.characteristicsList}
          handleClick={this.handleClick}
          currentProductFeatures={this.props.currentProductFeatures}
        />
      </>
    );
  }
}

export default CardActionButton;
