import { useEffect, useState } from "react"
import Modal from 'react-modal';
const image_url = "https://image.tmdb.org/t/p/w500/";

const customStyles = {
  content: {
    backgroundColor: "red",
    height: "500px",
    width: "800px",
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
const Movies = (props) => {
  const [isModalOpen, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div>
      <div key={props.movie?.id} className="container">
        <div className="movie-cont" onClick={openModal} >
          <div className="image-cont">
            <img
              className="image"
              src={`${image_url}${props.movie?.poster_path}`}
            />
          </div>
          <div>
            <h1 className="hOne">{props.movie?.original_title}</h1></div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div className="modalContent" >
          <div className="modalMovieSpec">
            <img
              className="modalImage"
              src={`${image_url}${props.movie?.poster_path}`}
            />
            <h1 className="modalhOne">{props.movie?.original_title}</h1>
            <div className="modalVotes">
              <p className="modalpOne" >{`${props.movie?.vote_average}${"/10"}${" ("}${props.movie?.vote_count}${" Voters)"}`}</p>
            </div>
          </div>
          <div className="modalOverview">
            <h1 className="modalOverviewH">OVERVIEW</h1>
            <p className="modalOverviewP" >{`${props.movie?.overview}${""}`}</p>
          </div>
          <div className="closeModal">
            <button onClick={closeModal} className="closeModalBtn" >Close</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Movies;