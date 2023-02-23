import { useEffect,useState } from "react"
import Modal from 'react-modal';
const image_url = "https://image.tmdb.org/t/p/w500/";

const customStyles = {
  content: {
    backgroundColor: "red",
    color: "red",
    height: "700px",
    width:"1000px",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: "2px red",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    position: "fixed",
    backgroundColor: "black"
  }
};
const Movies = () => {
  const [movies, setMovies] = useState([]);

  const[isModalOpen, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }


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
      <div key={movie?.id} className="container">
        <div className="movie-cont" onClick={openModal} >
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
    <div className="App">
      
      {mapMovies}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
         <div className="modalContent" >
         <img
              className="image"
              src={`${image_url}${movie?.poster_path}`}
            />
         </div>
      </Modal>
      </div>
  )
}

export default Movies;