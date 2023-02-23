import { useEffect,useState } from "react"
const image_url = "https://image.tmdb.org/t/p/w500/";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US&page=1"
    );
    const data = await response.json();

    setMovies(data.results);
    console.log(data);
  }

  const mapMovies = movies.map((movie) => {
    return (
      <div key={movie.id} className="container">
        <div className="movie-cont">
          <div className="image-cont">
            <img
              className="image"
              src={`${image_url}${movie?.poster_path}`}
            />
          </div>
          <h1 className="hOne">{movie?.original_title}</h1>
          <p className="pOne" >{`${movie?.vote_average}${"/10"}`}</p>
        </div>
      </div>
    );
  });

  useEffect(() => {
    getMovies();
  }, [movies]);

  return (
    <div className="App">{mapMovies}</div>
  )
}

export default Movies;