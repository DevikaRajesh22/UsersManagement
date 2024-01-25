import React from 'react';
import './Card.css';

const Card = ({ imageSrc, description,title }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" className="card-image" />
      <h3 className='card-title'>{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;