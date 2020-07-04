import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getStar(val, key) {
    switch(val) {
      case 0:
        return <FaStar key={key} color='lightgray'/>;
      case 50:
        return <FaStarHalfAlt key={key} color='#ffd500'/>;
      case 100:
        return <FaStar key={key} color='#ffd500'/>;
    }
  }
  
  getStars(val) {
      if (val === 0 || val < 0.5) {
        return [0, 0, 0, 0, 0];
      } else if (val >= 0.5 && val < 1) {
        return [50, 0, 0, 0, 0];
      } else if (val >= 1 && val < 1.5) {
        return [100, 0, 0, 0, 0];
      } else if (val >= 1.5 && val < 2) { 
        return [100, 50, 0, 0, 0];
      } else if (val >= 2 && val < 2.5) {
        return [100, 100, 0, 0, 0];
      } else if (val >= 2.5 && val < 3) {
        return [100, 100, 50, 0, 0];
      } else if (val >= 3 && val < 3.5) {
        return [100, 100, 100, 0, 0];
      } else if (val >= 3.5 && val < 4) {
        return [100, 100, 100, 50, 0];
      } else if (val >= 4 && val < 4.5) {
        return [100, 100, 100, 100, 0];
      } else if (val >= 4.5 && val < 5) {
        return [100, 100, 100, 100, 50];
      } else { 
        return [100, 100, 100, 100, 100];
      }
    }

  render() {
    return (
      <> 
      { 
        this.getStars(this.props.rating).map((value, i) => {
          return this.getStar(value, i);
        })
      }
      </>
    );
  }
}

export default Stars;