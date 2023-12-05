import React from 'react'
import './RecipeIndex.css'


function RecipeIndex({alpindex}) {
  const alp=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
  return (
    <div className=' row mt-5 p-5'>
            <h1 className='text-center'  style={{fontFamily: 'Brush Script MT, Brush Script Std, cursive'}}>Let's Search</h1>

      <div className='letters'>

      {
        alp.map(item=>{
          return(
              <h3 className='letter ' onClick={()=>alpindex(item)}>{item}</h3>
          )
        })
      }
      </div>
    </div>
  )
}

export default RecipeIndex
