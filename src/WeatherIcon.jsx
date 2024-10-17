import React from 'react'

function WeatherIcon({img, imgAlt}) {
  return (
    <div>
        <img src={img} alt={imgAlt} />
    </div>
  );
};

export default WeatherIcon