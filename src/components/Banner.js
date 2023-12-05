import React from 'react'
import './Banner.css'

function Banner() {

  return (
    <div>
    <div className='banner'>
       
        <div className='content mx-5'>
            <h1 className='title'  style={{fontFamily: 'Brush Script MT, Brush Script Std, cursive'}}>Don't know what to cook?</h1>
            <h3 className='description mt-3' >Let's help you out!</h3>

       </div>
        <div className='fade_bottom'></div>
      
    </div>
    
    </div>
  )
}

export default Banner
