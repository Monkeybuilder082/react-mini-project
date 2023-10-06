import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/esm/Badge'
import { useParams } from 'react-router-dom'
import api from '../api'

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState()
  const [reviews, setReviews] = useState([])

  const { id } = useParams()
  console.log('[MovieDetail.js]', id)

  const getMovieDetail = async () => {
    let res = await api.get(`/movie/${id}?language=ko`)
    console.log('[MovieDetail.js]', res.data)

    setMovieDetail(res.data)
  }

  const getReviews = async () => {
    let res = await api.get(`/movie/${id}/reviews?language=en-US&page=1`)

    setReviews(res.data.results)
  }

  useEffect(() => {
    getMovieDetail()
    getReviews()
  }, [])

  return (
    <div>
      {movieDetail ? (
        <div className="container movie-details">
          <div className="poster">
            <img
              src={`https://www.themoviedb.org/t/p/original${movieDetail?.poster_path}`}
            ></img>
          </div>
          <div className="info">
            <div className="genre">
              <Badge bg="danger">로맨스</Badge>
              <Badge bg="danger">로맨스</Badge>
              <Badge bg="danger">로맨스</Badge>
            </div>
            <h1>{movieDetail.title}</h1>
            <h4>그란 투리모스 영화</h4>
            <div>
              <span>출시일</span>
              <span>{movieDetail.runtime}분</span>
              <span>평점:{movieDetail.vote_average}</span>
              <span>{movieDetail.adult? ('청불'):('청소년')}</span>
            </div>

            <div className="overview">{movieDetail.overview}</div>
          </div>
        </div>
      ) : null}

      {/* 리뷰영역 */}
      <div>
        <div className="container reviewbox">
          {reviews.map((item) => (
            <div className="review-item">
              <h4>{item.author}</h4>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
