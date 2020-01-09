import React from 'react';
import './InputUrl.css'
const InputUrl =({onInputChange,onPictureSubmit})=>{
    return(
        <div>
            <p className="f3">
            {'This brain app would detect faces in pictures,give it a try..'}
            </p>
        <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
            <input className="f4  center pa2 w-70" type='text'  plceholder='input Image url' onChange={onInputChange}/>
           <button className="w-30 grow f4 link  ph3 pv2 dib white bg-light-green " onClick={onPictureSubmit}>DETECT</button>
            </div>
        </div>
        </div>
    );
}
export default InputUrl;