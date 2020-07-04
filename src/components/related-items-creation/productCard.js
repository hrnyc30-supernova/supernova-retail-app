import React from 'react';
import apiMaster from '../../apiMaster';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: [],
      cardImages: [],
      cardPrices: [],
      cardDetailsLoaded: false,
      cardImagesLoaded: false,
      cardPricesLoaded: false,
    };

    this.getCardDetails = this.getCardDetails.bind(this);
    this.getCardImages = this.getCardImages.bind(this);
    this.getCardPrices = this.getCardPrices.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.relatedProducts !== prevProps.relatedProducts) {
      this.getCardPrices();
      this.getCardImages();
      this.getCardDetails();
    }
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
      this.setState({ cardDetails: res, cardDetailsLoaded: true });
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
        cardImagesLoaded: true,
      });
    });
  }

  getCardPrices() {
    let promises = [];
    for (let i = 0; i < this.props.relatedProducts.length; i++) {
      promises.push(
        apiMaster
          .getProductStyles(this.props.relatedProducts[i])
          .then((res) => ({
            original_price: res.data.results[0].original_price,
            sale_price: res.data.results[0].sale_price,
          }))
          .catch((err) => {
            console.log(err);
          })
      );
    }
    Promise.all(promises).then((res) => {
      // console.log('res: ', res);
      this.setState({
        cardPrices: res,
        cardPricesLoaded: true,
      });
    });
  }

  render() {
    const areDetailsLoaded = this.state.cardDetailsLoaded;
    const areImagesLoaded = this.state.cardImagesLoaded;
    const arePricesLoaded = this.state.cardPricesLoaded;
    if (areDetailsLoaded && areImagesLoaded && arePricesLoaded) {
      return (
        <div className="cards-wrapper">
          {this.state.cardDetails.map((card, i) => {
            // console.log('this.state.cardDetails: ', this.state.cardDetails);
            // console.log('this.state.cardPrices: ', this.state.cardPrices);
            return (
              <div className="card" style={{ width: '15rem' }} key={i}>
                <img className="card-img-top" src={this.state.cardImages[i]} />
                <div className="card-body">
                  <div className="card-subtitle">{card.category}</div>
                  <div className="card-title">{card.name}</div>
                  <span
                    className={
                      this.state.cardPrices[i].sale_price === '0'
                        ? 'discounted-price-hidden'
                        : ''
                    }
                    style={
                      ({
                        textDecoration:
                          this.state.cardPrices[i].sale_price !== '0'
                            ? 'line-through'
                            : 'none',
                      },
                      { color: 'red' })
                    }
                  >
                    {Number(this.state.cardPrices[i].sale_price).toLocaleString(
                      'en-US',
                      {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }
                    )}
                  </span>
                  <span
                    style={{
                      textDecoration:
                        this.state.cardPrices[i].sale_price !== '0'
                          ? 'line-through'
                          : 'none',
                    }}
                  >
                    {Number(
                      this.state.cardPrices[i].original_price
                    ).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductCard;
