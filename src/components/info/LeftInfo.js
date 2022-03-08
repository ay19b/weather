import React, { useContext, useState } from 'react';
import { WeatherContext } from '../../context.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudShowersHeavy, faSun, faSmog,faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './style.css'


const LeftInfo = () => {
  const { temperature, city, weatherCondition, hours, minutes, dayOfWeek, date, month, year } = React.useContext(WeatherContext);

  return (
    <>
      <div className='left-info'>
        <div className='content'>
        <h1>{temperature}°</h1>
        <div className='location-info'>
          <h3>{city}</h3>
          <p>
            {hours < 10 && '0'}
            {hours}:{minutes < 10 && '0'}
            {minutes} - {dayOfWeek}, {date} {month} {year}
          </p>
        </div>
        <div className='weather-status'>
          {/* <i className='fas fa-cloud-showers-heavy fa-2x'></i> */}
          {/* <FontAwesomeIcon icon={faCloud} className='weather-icon fa-2x' /> */}
          <React.Fragment>
            {weatherCondition === 'Clouds' && <FontAwesomeIcon icon={faCloud}/>}

            {weatherCondition === 'Rain' && <FontAwesomeIcon icon={faCloudShowersHeavy} />}

            {weatherCondition === 'Drizzle' && <FontAwesomeIcon icon={faCloudShowersHeavy} />}

            {weatherCondition === 'Clear' && <FontAwesomeIcon icon={faSun} />}

            {weatherCondition === 'Snow' && <FontAwesomeIcon icon={faSnowflake} />}

            {weatherCondition === 'Mist' && <FontAwesomeIcon icon={faSmog} />}
            {/* Clouds, Rain, Clear, Mist */}
          </React.Fragment>
          <h3>{weatherCondition}</h3>
        </div>
       </div> 
      </div>
    </>
  );
};

export default LeftInfo;
