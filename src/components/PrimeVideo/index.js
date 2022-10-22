import './index.css'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const PrimeVideo = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const actionMoviesList = moviesList.filter(
    item => item.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    item => item.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-website-image"
      />
      <div className="prime-movies-section">
        <h1 className="movie-genre">Action Movies</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {actionMoviesList.map(movie => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="prime-movies-section">
        <h1 className="movie-genre">Comedy Movies</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {comedyMoviesList.map(movie => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
