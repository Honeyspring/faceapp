import React from 'react';
import './Logo.css';
import Hs from './Hs.png';
import Tilt from 'react-tilt';

const Logo=  ()=>{
 
    return (  
           <div className='ma4 mt0'>
              <Tilt className='Tilt br2 shadow-2' options={{max:25}} style={{height:150,width:150}}>
                  <div className='Tilt-innner pa3'><img src={Hs} alt='logo'/></div>
              </Tilt>
            </div>
      
    );
    }
export default Logo;