import './App.css';
import Meals from './components/Meals';
import {Route,Routes} from 'react-router-dom'
import RecipeInfo from './components/RecipeInfo';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Meals/>}/>
      <Route path='/:MealId' element={<RecipeInfo/>}/>

    </Routes>
    
  );
}

export default App;