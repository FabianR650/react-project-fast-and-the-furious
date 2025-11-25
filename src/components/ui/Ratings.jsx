import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Ratings({ rating }) {
  return (
    <div className="movie__ratings">
      <div className="movie__ratings">
                {
                   new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
                }
                {
                   !Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />
                }
            </div>
    </div>
  ); 
}

export default Ratings;