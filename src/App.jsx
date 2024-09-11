import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Importing our components
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';



export default function App() {
  // Constant with your API key
  const apiKey = "98e3fb1f";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) =>{

    try{

  //Make fetch request and store the response
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
  );
  // Parse JSON response into a JavaScript object
  const data = await response.json();

  //Set the Movie state to the recieved data

  setMovie(data);
} catch(e){
  console.error(e)
}
  }


  // We pass the getMovie function as a prop called moviesearch 

 useEffect(()=>{
  getMovie("clueless");
 },[]);


  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}