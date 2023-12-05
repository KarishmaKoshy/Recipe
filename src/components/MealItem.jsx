import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Meals.css'

function MealItem({data}) {
    let navigate=useNavigate()
  return (
    <>
    <div className='container p-3'>
    <div className="row g-3 ">
    

    {
        (!data) ? 'Not found' : data.map(item=>{
            return(
              <div className="col-6 col-md-4 col-lg-3 ">
                <div className='card cards' key={item.idMeal} onClick={()=>{navigate(`${item.idMeal}`)}}>
                  <img src={item.strMealThumb} className='img-fluid'alt='img'/>
                  <div className='card-body'><h3>{item.strMeal}</h3></div>
                </div> 
                </div>               
            )
        })
    }
    </div>
    </div>

      </>
    
  )
}

export default MealItem
