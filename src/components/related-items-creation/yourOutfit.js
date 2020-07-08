import React from 'react';
import apiMaster from '../../apiMaster';
import CardStars from './cardStars';
import ItemsCarousel from 'react-items-carousel';
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
// import CardActionButton from './cardActionButton';

class YourOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: [],
      cardImages: [],
      cardPrices: [],
      cardDetailsLoaded: false,
      cardImagesLoaded: false,
      cardPricesLoaded: false,
      activeItemIndex: 0,
    };

    this.updateOutfit = this.addToOutfit.bind(this);
    this.getCardImages = this.getCardImages.bind(this);
    this.getCardPrices = this.getCardPrices.bind(this);
  }

  addToOutfit() {
    let container = [this.props.currentProductInfo];
    this.setState({
      cardDetails: container,
      cardDetailsLoaded: true,
    });
    // console.log('cardDetails: ', this.state.cardDetails);
    this.getCardImages();
    this.getCardPrices();
  }

  getCardImages() {
    apiMaster
      .getProductStyles(this.props.id)
      .then(
        (res) =>
          res.data.results[0].photos[0].thumbnail_url ||
          'https://images.unsplash.com/photo-1529088148495-2d9f231db829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80'
      )
      .then((res) => {
        // console.log('res: ', res);
        let container = [res];
        this.setState({
          cardImages: container,
          cardImagesLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCardPrices() {
    apiMaster
      .getProductStyles(this.props.id)
      .then((res) => ({
        original_price: res.data.results[0].original_price,
        sale_price: res.data.results[0].sale_price,
      }))
      .then((res) => {
        // console.log('getCardPrices res: ', res);
        let container = [res];
        this.setState({
          cardPrices: container,
          cardPricesLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const areDetailsLoaded = this.state.cardDetailsLoaded;
    const areImagesLoaded = this.state.cardImagesLoaded;
    const arePricesLoaded = this.state.cardPricesLoaded;
    if (areDetailsLoaded && areImagesLoaded && arePricesLoaded) {
      return (
        <div className="your-outfit-container">
          <div className="add-outfit-base-card">
            <AiOutlinePlus size={100} id="big-plus-sign" />
          </div>
          <div className="outfit-carousel-wrapper">
            <ItemsCarousel
              infiniteLoop={false}
              gutter={26}
              activePosition={'center'}
              chevronWidth={60}
              disableSwipe={false}
              alwaysShowChevns={false}
              numberOfCards={2}
              slidesToScroll={1}
              outsideChevron={true}
              showSlither={true}
              firstAndLastGutter={true}
              activeItemIndex={this.state.activeItemIndex}
              requestToChangeActive={(value) =>
                this.setState({ activeItemIndex: value })
              }
              rightChevron={<FaRegArrowAltCircleRight color="#525252" />}
              leftChevron={<FaRegArrowAltCircleLeft color="#525252" />}
            >
              {this.state.cardDetails.map((card, i) => {
                return (
                  <div className="products-card" key={i}>
                    <div className="img-wrapper">
                      <img
                        className="card-img-top"
                        src={this.state.cardImages[i]}
                      />
                      <AiOutlineClose
                        className="action-button-outfit"
                        onClick={() => {
                          this.setState({
                            cardDetails: [],
                            cardImages: [],
                            cardPrices: [],
                            cardDetailsLoaded: false,
                            cardImagesLoaded: false,
                            cardPricesLoaded: false,
                            activeItemIndex: 0,
                          });
                        }}
                      />
                    </div>
                    <div
                      className="card-body"
                      onClick={() => {
                        this.props.productCardClicked(card.id);
                      }}
                    >
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
                        {Number(
                          this.state.cardPrices[i].sale_price
                        ).toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
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
                      <div className="stars-body">
                        <CardStars rating={this.props.averageRating} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </ItemsCarousel>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="add-outfit-base-card"
          onClick={() => {
            this.addToOutfit();
          }}
        >
          <AiOutlinePlus size={100} id="big-plus-sign" />
        </div>
      );
    }
  }
}

export default YourOutfit;
