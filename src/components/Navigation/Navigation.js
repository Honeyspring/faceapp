import React from 'react';
import './Navigation.css';
const Navigation = ({onRouteChange,IsLoggedIn})=>{

      if(IsLoggedIn ===true){
        return (   
           <nav className='navbar'>
              <h3  onClick={()=>onRouteChange('SignIn')} className='f3 Link dim balck pa3 pointer'>SIGN OUT</h3> 
            </nav>
        );
      }else {
        return(
        <nav className='navbar'>
              <h3  onClick={()=>onRouteChange('SignIn')} className='f3 Link dim balck pa3 pointer'>SIGN IN </h3> 
              <h3  onClick={()=>onRouteChange('Register')} className='f3 Link dim balck pa3 pointer'>REGISTER</h3> 
            </nav>
              );
      }
      
  
    }
export default Navigation;