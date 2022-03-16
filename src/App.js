import React,{useEffect, useState} from 'react';
import Recipie from './Recipie';
import './App.css';

function App (){
const API_ID = "a3ba03f7";
const API_KEY = "4d5929d87bad6fa4a6c520debd4c4bcc";

const [recipies , setRecipies] = useState([]);
const [search , setSearch] = useState("");
const [query, setQuery] = useState('chicken')

useEffect( () => {
  getRecipies()
}, [query]);

const getRecipies = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
  const data = await response.json();
  setRecipies(data.hits);
  console.log(data.hits);
}
const updateSearch = e =>{
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('')
}
return (
    <div className="App">
      <form onSubmit ={getSearch} 
      className= "Search-form">
        <input 
        className ="search-bar" 
        type= "text" 
        value={search} 
        onChange={updateSearch}/>
        <button  className = "search-button" 
        type= "submit"> Search </button>
      </form>
      <div className='recipies'>
      {recipies.map(recipe => (
          <Recipie 
          key = {recipe.recipe.label}
          title ={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
      ))}
      </div>
    </div>
  );
};

export default App;
