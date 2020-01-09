import React from 'react';
//import './Rank.css'
const Rank=({username,entries})=>{
       return(
            <div>
        
            <div className='white f3'>
            {`${username},your current entry is...`}
                </div>
                
                <div className='white f1'>
               #{entries}
                </div>
        
            </div>
        );
    
    
}
export default Rank;