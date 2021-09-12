import React from 'react'
import {FaRegEnvelope} from 'react-icons/fa'
import {RiFacebookFill} from 'react-icons/ri'
import {GrTwitter} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'
import {GiWorld} from 'react-icons/gi'
import Data from './data'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="social-media">
                <h2>Follow Xbox</h2>
                <ul className="list-media">
                   <li><FaRegEnvelope /></li>
                   <li><RiFacebookFill /></li>
                   <li><GrTwitter /></li>
                   <li><AiOutlineInstagram /></li>
                </ul>
            </div>
            <div className="coll-footer">
                {Data.map((brows)=>{
                    const {id,name,item1,item2,item3,item4,item5} = brows

                    return(
                    <ul key={id}>
                       <h3>{name}</h3>
                       <li>{item1}</li>
                       <li>{item2}</li>
                       <li>{item3}</li>
                       <li>{item4}</li>
                       <li>{item5}</li>
                    </ul>
                    )
                })}
                
                
            </div>
            <div className="lang"><GiWorld /> English (United States)</div>
        </div>
    )
}

export default Footer
