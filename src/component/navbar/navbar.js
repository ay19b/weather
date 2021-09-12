import React,{useState,useEffect} from 'react'
import './navbar.css'
import Logo from '../../images/logo.png'
import Xbox from '../../images/xbox.png'
import Data from './data'
import {AiOutlineSearch,AiOutlineShoppingCart,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {BiChevronDown} from 'react-icons/bi'
import { Dropdown} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

function Navbar() {
const [width, setWidth]   = useState(window.innerWidth);
const [menu, setMenu]   = useState(false);


const clickMenu=()=>{
    setMenu(!menu)
};

const updateDimensions = () => {
    setWidth(window.innerWidth);
    if(window.innerWidth <=900){
        setWidth(false);
    }else{
        setWidth(true);
    }
    
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
}, [width]);
    
    
 window.addEventListener("resize", updateDimensions);       
    
      return (
          <>
          {width?
           <div className="nav">
           <div className="left-nav">
            <img src={Logo} alt="logo" className="logo"/>
            <div className="line"></div>
            <img src={Xbox} alt="xbox" className="xbox"/>
         </div>
         <ul className="list-nav">
             {Data.map((item)=>{
                 const {id,name,listOne,listTwo,listThree,listFour,listFive}=item
                 return(
                         <Dropdown title={name} key={id} className="item-nav"> 
                           <Dropdown.Item>{listOne}</Dropdown.Item>
                           <Dropdown.Item>{listTwo}</Dropdown.Item>
                           <Dropdown.Item>{listThree}</Dropdown.Item>
                           <Dropdown.Item>{listFour}</Dropdown.Item>
                           <Dropdown.Item>{listFive}</Dropdown.Item>
                         </Dropdown>  
                     
                 )
             })}
         </ul>
         <div className="right-nav">
             <div className="alsoft">
                 
                 <Dropdown title='All Microsoft'>
                           <Dropdown.Item>Overview</Dropdown.Item>
                           <Dropdown.Item>Browser Games</Dropdown.Item>
                           <Dropdown.Item>Xbox Games Pass For Pc</Dropdown.Item>
                           <Dropdown.Item>Xbox Cloud Gaming (Beta)</Dropdown.Item>
                           <Dropdown.Item>Xbox Live Gold</Dropdown.Item>
                           
                </Dropdown>
                 
             </div>
             <AiOutlineSearch />
             <AiOutlineShoppingCart />
             <div className='sign'>Sign in</div>
         </div> 
        </div>:
          <> 
            <div className="nav scd" >
             <div className="left-nav scd">
              <AiOutlineMenu onClick={clickMenu}/>
			  
			   <ul className={menu ? 'list-menu active' : 'list-menu'}>
                  <li className="item-menu">
				    <AiOutlineClose onClick={clickMenu} />
				  </li>
                  
                  
                  <li className="item-menu">Microsoft 365</li>
                  <li className="item-menu">Office</li>
                  <li className="item-menu">Windows</li>
                  <li className="item-menu">Surface</li>
                  <li className="item-menu">Xbox</li>
                  <li className="item-menu">Deals</li>
				  <li className="item-menu">Support</li>
				  <li className="item-menu">Software</li>
                </ul>
              
			    
			      <AiOutlineSearch />
				
			  
              
             </div>
                
              <img src={Logo} alt="logo" className="logo scd"/>
              <div className="right-nav scd">
                 <AiOutlineShoppingCart />
                 <div className='sign scd'>Sign in</div>
              </div>
              
            </div>
    
           <div className="scd-nav">
		    <div className="container">
			   <img src={Xbox} alt="xbox" className="xbox scd"/>
               <BiChevronDown />
			</div>
            
           </div> 
           </>
        }
        </>
    )
    
        
    
    
    
}

export default Navbar
