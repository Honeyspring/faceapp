import React from 'react';
import './FaceDetection.css'
const FaceDetection =({imageUrl,box})=>{
    return(
        <div  className='center ma'>
          
        <div className='absolute mt2'>
         <img src={imageUrl} alt='images url' id='inputImage' width='500px' height='auto'/>
         <div className='boundingBox' style={{top:box.topRow,bottom:box.bottomRow,left:box.leftCol,right:box.rightCol}}></div>
        </div>
        </div>
    );
}
export default FaceDetection;