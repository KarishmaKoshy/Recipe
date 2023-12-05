import React, { useState,useEffect } from 'react'
import MealItem from './MealItem'
import Banner from './Banner'
import RecipeIndex from './RecipeIndex'

function Meals() {
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
    const [item,setItem]=useState()
    const [show,setShow]=useState(false)
    const [search,setSearch]=useState("")


    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals)
            setShow(true)
        })
    },[url])

    

    
    const setIndex=(alp)=>{
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alp}`)

    }


    const handleClick=(e)=>{
        e.preventDefault()
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }

    
  return (
    <div style={{backgroundColor:'#ebdeda'}}>
      <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:'#4d4b4b',color:'white'}}>
  <div className="container-fluid">
    <h3 >ABCooking</h3>

    
      
    
    <form className="d-flex justify-content-right" role="search"   >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        onChange={e=>setSearch(e.target.value)} value={search}/>
        <button className="btn btn-secondary" type="submit" onClick={handleClick}><i class="bi bi-search"></i></button>
      </form>
  </div>
</nav>
<Banner/>
<div className='container-fluid '>
        <RecipeIndex alpindex={(alp)=>{setIndex(alp)}}/>
      </div>
<div>
    {
        show ?  <MealItem data={item} /> : "Not found"

    }
</div>


    </div>
  )
}

export default Meals
