import React from 'react';
import { FaStar } from 'react-icons/fa';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return <FaStar key={i} color={ratingValue <= this.props.rating ? "#ffd500" : "lightgray"}/>
        })}
      </>

    );
  }
}

export default Stars;
