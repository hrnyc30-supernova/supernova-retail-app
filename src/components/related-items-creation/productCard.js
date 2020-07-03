import React from 'react';
import apiMaster from '../../apiMaster';
import Card from 'react-bootstrap/Card';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: [],
      cardImages: [],
    };

    this.clearList = this.clearList.bind(this);
    this.getCardDetails = this.getCardDetails.bind(this);
    this.getCardImages = this.getCardImages.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.relatedProducts !== prevProps.relatedProducts) {
      // console.log('props: ', this.props.relatedProducts);
      this.clearList();
      this.getCardDetails();
      this.getCardImages();
    }
  }

  clearList() {
    this.setState({
      cardDetails: [],
      cardImages: [],
    });
  }

  getCardDetails() {
    let promises = [];
    for (let i = 0; i < this.props.relatedProducts.length; i++) {
      promises.push(
        apiMaster
          .getProductInfo(this.props.relatedProducts[i])
          .then((res) => res.data)
          .catch((err) => {
            console.log(err);
          })
      );
      // console.log('cardDetails: ', i, cardDetails);
    }
    Promise.all(promises).then((res) => {
      // console.log('res: ', res);
      this.setState({ cardDetails: res });
    });
  }

  getCardImages() {
    let promises = [];
    for (let i = 0; i < this.props.relatedProducts.length; i++) {
      promises.push(
        apiMaster
          .getProductStyles(this.props.relatedProducts[i])
          .then(
            (res) =>
              res.data.results[0].photos[0].thumbnail_url ||
              'https://images.unsplash.com/photo-1529088148495-2d9f231db829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80'
          )
          .catch((err) => {
            console.log(err);
          })
      );
    }
    Promise.all(promises).then((res) => {
      // console.log('res: ', res);
      this.setState({
        cardImages: res,
      });
    });
  }

  render() {
    return (
      <div className="cards-wrapper">
        {this.state.cardDetails.map((card, i) => {
          return (
            <Card style={{ width: '15rem' }} key={i}>
              <Card.Img variant="top" src={this.state.cardImages[i]} />
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
