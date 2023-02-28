import "./App.css";
import React from 'react';
import Movies from "./Movies";
import Modal from 'react-modal';
import { useEffect,useState } from "react"



function App() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US&page=1"
    );
    const data = await response.json();

    setMovies(data.results);
    console.log(data);
  }

  useEffect(() => {
    getMovies();
  }, [movies]);

  return <div className="App">
    {movies.map((movie) => {
      return(
      <Movies movie={movie} />
     )
    })}
  </div>;
}

export default App;