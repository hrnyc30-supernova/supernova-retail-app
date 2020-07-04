import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  getStar(val, key) {
    switch(val) {
      case 0:
        // return <span onClick={() => console.log('clicked', value)} value={this.state.value} key={i+1} color='lightgray'>★</span>
        return <FaStar key={key} color='lightgray'/>;
      case 50:
        // return <span onClick={() => console.log('clicked', value)} value={this.state.value} key={i+1} color={this.state.value >= i + 1 ? '#ffd500' : 'lightgray'}>★</span>
        return <FaStarHalfAlt key={key} color='#ffd500'/>;
      case 100:
        // return <span onClick={() => console.log('clicked', value)} value={this.state.value} key={i+1} color={this.state.value >= i + 1 ? '#ffd500' : 'lightgray'}>★</span>
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

  handleClick(e, value) {
    console.log('clicked', e);
    console.log('value on click', value);
    e.preventDefault();
    // this.setState
  }


  render() {
    // console.log(&#9733)
    return (
      <> 
      { 
        this.props.rating !== undefined ?
          // [...Array(5)].map((item, i) => {
          //   return <><button name='rating' onClick={(e, value) => this.handleClick(e, value)} id={i+1} key={i+1} color={this.state.value >= i + 1 ? '#ffd500' : 'lightgray'}>★</button> </>
          // }) : null
          this.getStars(this.props.rating).map((value, i) => {
            return this.getStar(value, i);
          })
          : [...Array(5)].map((item, i) => {
            return <><button type='button' onClick={e => this.handleClick(e)} value={i+1}>★</button></>
          })
      }
      </>
    );
  }
}

export default Stars;

{/* <FaStar onClick={(e) => this.handleClick(e)} key={i+1} value={i+1} color={this.state.value >= i + 1 ? '#ffd500' : 'lightgray'}/> */}