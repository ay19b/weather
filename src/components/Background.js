import React from 'react';
import { WeatherContext } from '../context.js';
import clear from '../images/clear.jpg';
import rain from '../images/rain.jpg';
import mist from '../images/mist.jpg';
import cloud from '../images/cloud.jpg';
import snow from '../images/snow.jpg';

const Background = () => {
  const { weatherCondition } = React.useContext(WeatherContext);

  const documentBody = document.querySelector('body');

  // If: Width <= 650px is phone width in css
  
    if (weatherCondition === 'Clear') {
      documentBody.style.background = `url(${clear}) no-repeat center center/cover`;
    }

    if (weatherCondition === 'Rain' || weatherCondition === 'Drizzle' || weatherCondition === 'Thunderstorm') {
      documentBody.style.background = `url(${rain}) no-repeat center center/cover`;
    }
  
    if (weatherCondition === 'Clouds') {
      documentBody.style.background = `url(${cloud}) no-repeat center center/cover`;
    }

    if (weatherCondition === 'Mist') {
      documentBody.style.background = `url(${mist}) no-repeat center center/cover`;
    }
    if (weatherCondition === 'snow') {
      documentBody.style.background = `url(${snow}) no-repeat center center/cover`;
    }
  

  return <></>;
};

export default Background;
