import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>{this.props.averageRating}</h1>;
  }
}

export default Stars;
