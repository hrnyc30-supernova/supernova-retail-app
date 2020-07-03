import React from "react";
import apiMaster from "./apiMaster";
import { hot } from "react-hot-loader/root";

import NavigationBar from "./components/navigationBar";
import ProductDetail from "./components/product-detail/productDetail";
import RelatedItems from "./components/related-items-creation/relatedItems";
import QuestionsAndAnswers from "./components/questions-and-answers/questionsAndAnswers";
import RatingsReviews from "./components/ratings-and-reviews/ratingsReviews";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      averageRating: "calculating",
    };
    this.calculateAverageRating = this.calculateAverageRating.bind(this);
  }

  componentDidMount() {
    apiMaster
      .getProductInfo()
      .then(({ data }) => {
        this.setState({ currentProduct: data });
      })
      .catch((err) => {
        console.log(err);
      });

    apiMaster
      .getReviewMetaData()
      .then(({ data }) => {
        // console.log('should be ratings', data);
        let averageRating = this.calculateAverageRating(data.ratings);
        this.setState({ averageRating: averageRating });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  calculateAverageRating(obj) {
    let stars = 0;
    let lengthOfRatings = Object.values(obj).reduce((sum, val) => {
      return (sum += val);
    });
    for (var key in obj) {
      stars += key * obj[key];
    }
    let averageRatings = stars / lengthOfRatings;
    return averageRatings;
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <ProductDetail
          currentProduct={this.state.currentProduct}
          averageRating={this.state.averageRating}
        />
        <RelatedItems currentProductID={this.state.currentProduct.id} />
        <QuestionsAndAnswers currentProductID={this.state.currentProduct.id} />
        <RatingsReviews
          currentProductID={this.state.currentProduct.id}
          averageRating={this.state.averageRating}
        />
      </div>
    );
  }
}

export default hot(App);
