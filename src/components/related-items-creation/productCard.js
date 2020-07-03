import React from 'react';
import apiMaster from '../../apiMaster';
import Card from 'react-bootstrap/Card';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: [],
    };

    this.getCardDetails = this.getCardDetails.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.relatedProducts !== prevProps.relatedProducts) {
      // console.log('props: ', this.props.relatedProducts);
      this.clearList();
      this.getCardDetails();
    }
  }

  clearList() {
    this.setState({
      cardDetails: [],
    });
  }

  getCardDetails() {
    // let cardDetails = [];
    for (let i = 0; i < this.props.relatedProducts.length; i++) {
      apiMaster
        .getProductInfo(this.props.relatedProducts[i])
        .then((info) => {
          this.setState((prevState) => ({
            cardDetails: [...prevState.cardDetails, info.data],
          }));
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log('cardDetails: ', i, cardDetails);
    }
  }

  render() {
    return (
      <div className="cards-wrapper">
        {this.state.cardDetails.map((card, i) => {
          return (
            <Card style={{ width: '15rem' }} key={i}>
              <Card.Img variant="top" src="" />
              <Card.Text>Super awesome image placeholder</Card.Text>
              <Card.Body>
                <Card.Subtitle>{card.category}</Card.Subtitle>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>Price</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default ProductCard;
