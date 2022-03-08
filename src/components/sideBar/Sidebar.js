import React, { useState } from 'react';
import { WeatherContext } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCloud, faCloudShowersHeavy, faSun, faSmog,faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Sidebar = () => {
  const { temperature, city, weatherCondition, hours, minutes, dayOfWeek, date, month, year } = React.useContext(WeatherContext);
  const { country, humidity, wind, feelsLike, searchCity } = React.useContext(WeatherContext);
  const [City, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (City) {
      searchCity(City);
    }

    console.log(City);
  };

  return (
    <div className='sidebar'>
      
        <form autoComplete='off' id='sidebar-form' onSubmit={handleSubmit}>
          <input id='location-input' type='text' placeholder='Enter Location..' onChange={(e) => setCity(e.target.value)} />
          <FontAwesomeIcon icon={faLocationDot}  />
          
        </form>

        <div className='divider'></div>
        <div className='info'>
          <h1>{temperature}°</h1>
          <div className='location-info'>
            <h3>{city}</h3>
            <h5>
              {hours < 10 && '0'}
              {hours}:{minutes < 10 && '0'}
              {minutes} - {dayOfWeek}, {date} {month} {year}
            </h5>
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
        <div className='cities'>
          <div className='city' onClick={() => searchCity('Alger')}>
             Alger
          </div>
          <div className='city' onClick={() => searchCity('Setif')}>
            Setif
          </div>
          <div className='city' onClick={() => searchCity('Oran')}>
             Oran     
          </div>
          <div className='city' onClick={() => searchCity('Bejaia')}>
              Bejaia
          </div>
        </div>
        

        <div className='divider'></div>

        <h3 className='weather-details white'>Weather Details</h3>
        <div className='status-list'>
          <div className="status">
            <h4>Country</h4>
            <h4 className='country'>{country}</h4>
          </div>
          <div className="status">
            <h4>Humidity</h4>
            <h4 className='humidity'>{humidity}%</h4>
          </div>
          <div className="status">
            <h4>Wind</h4>
            <h4 className='white'>{wind}km/h</h4>
          </div>
          <div className="status">
            <h4>Feels Like</h4>
            <h4 className='feels-like'>{feelsLike}°</h4>
          </div>
        </div>

        <div className='spacer'></div>
      
    </div>
  );
};

export default Sidebar;