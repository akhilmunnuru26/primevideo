import './index.css'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie

  const overlayStyles = {
    backgroundColor: 'transparent',
  }
  console.log(movie)
  return (
    <div>
      <Popup
        modal
        overlayStyle={overlayStyles}
        trigger={
          <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
        }
      >
        {close => (
          <>
            <div className="btn-container">
              <button
                className="close-btn"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
            </div>
            <div className="video-player-responsive-container">
              <ReactPlayer autoplay url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
