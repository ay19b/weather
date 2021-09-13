import React from 'react'
import './hero.css'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import {BiChevronRight} from 'react-icons/bi'

import {Nav,Data} from './data'
function Hero() {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className="hero">
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false}
              interval={3000}
              >
                 {Data.map((item)=>{
                const{id,img,header,desc,btn} = item
                return(
                  <div key={id}>
                     <img src={img} />
                     <div className="disc">
                       <h2>{header}</h2>
                       <span>{desc}</span>
                      <button>{btn} <BiChevronRight /> </button>
                     </div>
                  </div>
                )
            })}
            </AutoplaySlider>
            
            
            <ul className="inf">
               {Nav.map((item)=>{
                   const{id,name,icon} = item
                   return(
                       <li key={id}>
                          {icon}
                          <h3>{name}</h3>
                       </li>
                   )
               })}
            </ul>

            
        </div>
    )
}

export default Hero;
