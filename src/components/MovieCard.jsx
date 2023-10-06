import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Badge from 'react-bootstrap/Badge'
import { MovieReducerActions } from '../redux/reducers/movieSlice'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

  const { genreList } = useSelector(
    (state) => state.movie
  )

  const [hover, setHover] = useState()

  // https://www.themoviedb.org/t/p/w355_and_h200_multi_faces

  const div_styled = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${movie.poster_path})`,
    width: '300px',
    height: '200px',
    
  }

  const text_styled = {
    width: '300px',
    height: '200px',
    backgroundColor: 'black',
    
  }

  const link_styled = {
    color: 'white',
    textDecoration:'none'
  }

  const handleMouseOver = () => {
    setHover(true)
  }

  const handleMouseOut = () => {
    setHover(false)
  }

 

  // dispatch(
  //   MovieReducerActions.initData({
  //     genre: genre.data
  //   })
  // )

  return (
    <div
      style={hover ? text_styled : div_styled}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Link to={`/movies/${movie.id}`} style={link_styled}>
      {hover ? (
        <div className='MovieCard_Container'>
          <div className='MovieCard_title'>{movie.title}</div>

          <div>
            {movie.genre_ids.map((id) => (
              <Badge bg="danger" key={id}>
                {/* find(): 일치한 정보들 중 첫번째 요소만 반환하는 함수 */}
                {genreList.find((item)=>item.id===id).name}
              </Badge>
            ))}
          </div>

          <div>
            평점 : {movie.vote_average}점 |{' '}
            {movie.adult ? '청불' : '청소년 관람'}
          </div>
        </div>
      ) : null}
      </Link>
    </div>
  )
}

export default MovieCard
