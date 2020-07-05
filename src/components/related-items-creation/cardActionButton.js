import React from 'react';
import apiMaster from '../../apiMaster';
import { AiFillStar } from 'react-icons/ai';

function CardActionButton(props) {
  return (
    <a className="action-button" href="#" onClick={handleClick}>
      <AiFillStar />
    </a>
  );
}

function handleClick(e) {
  console.log(e);
}

export default CardActionButton;
