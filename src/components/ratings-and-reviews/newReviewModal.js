import React from 'react';
import Stars from './stars.js';
import Modal from 'react-bootstrap/Modal';
import apiMaster from '../../apiMaster.js';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      rating: 0, 
      recommend: 1,
      characteristics: {},
      summary: '',
      body: '',
      photos: {},
      nickname: '',
      email: ''
    };
    this.charScales = {
      Size: {
        '1': 'A size too small',
        '2': '1/2 a size too small',
        '3': 'Perfect',
        '4': '1/2 a size too big',
        '5': 'A size too big'
      }, 
      Width: {
        '1': 'Too narrow',
        '2': 'Slightly narrow',
        '3': 'Perfect',
        '4': 'Slightly Wide',
        '5': 'Too wide'
      },
      Comfort: {
        '1': 'Uncomfortable',
        '2': 'Slightly uncomfortable',
        '3': 'Ok',
        '4': 'Comfortable',
        '5': 'Perfect'
      },
      Quality: {
        '1': 'Poor',
        '2': 'Below average',
        '3': 'What I expected',
        '4': 'Pretty great',
        '5': 'Perfect'
      },
      Length: {
        '1': 'Runs short',
        '2': 'Runs slightly short',
        '3': 'Perfect',
        '4': 'Runs slightly long',
        '5': 'Runs long'
      },
      Fit: {
        '1': 'Runs tight',
        '2': 'Runs slightly tight',
        '3': 'Perfect',
        '4': 'Runs slightly big',
        '5': 'Runs big'
      }
    }
    this.sendReview = this.sendReview.bind(this);
    this.getScaleValue = this.getScaleValue.bind(this);
  }

  sendReview(reviewObj) {
    // console.log('this is the review that we will send to the API', reviewObj);
    this.props.toggleModal();
  }

  getScaleValue(characteristic, rating) {
    rating = rating.toString();
    return this.charScales[characteristic][rating];
  }

  render() {
    return (
        <Modal show={this.props.show} animation={false}>
            <Modal.Header>
                <Modal.Title><h4>Write Your Review</h4><small>{`About the ${this.props.currentProductName}`}</small></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <p>*Overall Rating <Stars rating='0' /></p>
                    <label className='label-container' htmlFor='recommend' required>*Do you recommend this product?
                        <input type="radio" name="recommend" id="recommend" default value="1" /> Yes
                        <input type="radio" name="recommend" id="recommend"value="0" /> No
                    </label><br/>
                    <label className='label-container' htmlFor='characteristics'>*Characteristics<br/>
                    {Object.keys(this.props.currentProductCharacteristics).map(char => {
                        return <><label className='label-container' required htmlFor={char}>{`${char}: `}</label>{['1', '2', '3', '4', '5'].map((item, i) => {
                            return <><input type="radio" name={char} value={i+1}/><small>{this.getScaleValue(char, item)}</small></> 

                        })}<br/></>
                    })} </label><br/>
                    <label className='label-container' required htmlFor='summary'>*Review Summary<br/>
                        <textarea type='text' id='summary' required name='summary' placeholder='Example: Best purchase ever!' maxLength='60'></textarea>
                    </label><br/>
                    <label className='label-container' required htmlFor='body'>*Review Body<br/>
                        <textarea type='text' id='body' required name='body' placeholder='Why did you like the product or not?' maxLength='1000' minLength='50'></textarea>
                    </label>
                    <p>Upload your photos</p>
                    <label className='label-container' required htmlFor='nickname'>*What is your nickname<br/>
                        <textarea type='text' id='nickname' required name='nickname' placeholder='Example: jackson11!' maxLength='60'></textarea><br/>
                        <small>For privacy reasons, do not use your full name or email address</small><br/>
                    </label><br/>
                    <label className='label-container' required htmlFor='email'>*Your email<br/>
                        <textarea type='text' id='email' required name='email' placeholder='Example: jackson11@email.com' maxLength='60'></textarea><br/>
                        <small>For authentication reasons, you will not be emailed</small>
                    </label>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={e => this.sendReview(this.state)}>Submit Review</button>
            </Modal.Footer>
        </Modal>
      );
    }
} 

export default NewReview;
