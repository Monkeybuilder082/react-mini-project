import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import MovieCard from './MovieCard'

const MovieSlide = ({ movies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  // console.log('슬라이드', movies[0].poster_path)
  // let {poster_path} = movies
  // console.log('이미지', poster_path)
  console.log(movies)


  return (
    <div>
      <Carousel responsive={responsive}>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </Carousel>
      ;
    </div>
  )
}

export default MovieSlide
