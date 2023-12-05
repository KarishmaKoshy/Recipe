import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import './RecipeInfo.css'
function RecipeInfo() {
    const {MealId}=useParams();
    const [items,setItems]=useState()
    const navigates=useNavigate()

    if(MealId!==""){
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`).then(res=>res.json()).then(data=>{
            setItems(data.meals[0])
        })
    }

  return (
    <div className='container mt-5 p-5 backimg'>
           <button onClick={()=>{navigates('/')}} type="button" class="btn btn-outline-dark">Back</button>
      <div className='row '>
      {
        (!items)? "":(<>
        <div className='row justify-content-center'>
          <div className='col-8 '>
          <h1 className='my-5 text-center' style={{fontFamily: 'Brush Script MT, Brush Script Std, cursive'}}>{items.strMeal}</h1>
          <div className='text-center'>
            <img className='img-fluid' src={items.strMealThumb} style={{height:'250px'}} alt='food'></img>
          </div>
          <h3 className='my-5 text-center' >Ingrediants</h3>
          <ul>
         
          <p className='text-center'>{items.strIngredient1}  {items.strMeasure1}</p>
         <p className='text-center'>{items.strIngredient2}  {items.strMeasure2}</p>
         <p className='text-center'>{items.strIngredient3}  {items.strMeasure3}</p>
          <p className='text-center'>{items.strIngredient4}  {items.strMeasure4}</p>
          <p className='text-center'>{items.strIngredient5}  {items.strMeasure5}</p>
       <p className='text-center'>{items.strIngredient6}  {items.strMeasure6}</p>
         <p className='text-center'>{items.strIngredient7}  {items.strMeasure7}</p>
        <p className='text-center'>{items.strIngredient8}  {items.strMeasure8}</p>
      <p className='text-center'>{items.strIngredient9}  {items.strMeasure9}</p>
          <p className='text-center'>{items.strIngredient10}  {items.strMeasure10}</p>
          <p className='text-center'>{items.strIngredient11}  {items.strMeasure11}</p>
          <p className='text-center'>{items.strIngredient12}  {items.strMeasure12}</p>
        <p className='text-center'>{items.strIngredient13}  {items.strMeasure13}</p>
         <p className='text-center'>{items.strIngredient14}  {items.strMeasure14}</p>
       <p className='text-center'>{items.strIngredient15}  {items.strMeasure15}</p>
         <p className='text-center'>{items.strIngredient16}  {items.strMeasure16}</p>
          <p className='text-center'>{items.strIngredient17}  {items.strMeasure17}</p>
          <p className='text-center' >{items.strIngredient18}  {items.strMeasure16}</p>
          <p className='text-center'>{items.strIngredient19}  {items.strMeasure19}</p>
          <p className='text-center'>{items.strIngredient20}  {items.strMeasure20}</p>

          <h3 className='my-5 text-center' >Method</h3>
          <p>{items.strInstructions}</p>


          </ul>

          </div>
         
        </div>
        </>)
      }
    </div>
    </div>
  )
}

export default RecipeInfo
