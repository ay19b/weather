import React from 'react'
import './prod.css'
import {BiChevronRight} from 'react-icons/bi'
import Data from './data'

function Prod() {
    return (
        <div className="prod">
            {Data.map((item)=>{
                const {id,img,header,desc,btn}=item
                return(
                   <div className="item-prod">
                    <img src={img} key={id}/>
                    <div className="prod-desc" key={id}>
                     <div className='desc' >
                       <h2>{header}</h2>
                       <span>{desc}</span>
                       <button>{btn} <BiChevronRight /> </button>
                     </div>    
                    </div>
                   </div>
                )
            })}

            
            
        </div>
    )
}

export default Prod
