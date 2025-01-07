import React from 'react';

const HotelButton = ({ imageSrc, alt, onClick }) => (
  <button onClick={onClick} className="hotel-button">
    <img src={imageSrc} alt={alt} className="hotel-image" />
  </button>
);

export default HotelButton;