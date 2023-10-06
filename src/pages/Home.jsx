import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieReducerActions } from '../redux/reducers/movieSlice'
import api from '../api'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from 'react-spinners/ClipLoader'

const Home = () => {
  let [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  // const popularMovies = useSelector((state) => state.movie.popularMovies)
  // console.log('셀렉터', popularMovies)

  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  )
  console.log('테스트', popularMovies, topRatedMovies, upcomingMovies)
  

  const popularReq = async () => {
    let res = await api.get('/movie/popular?language=ko-KR&page=1')
    console.log(res.data)
  }
  const topRatedReq = async () => {
    let res = await api.get('/movie/top_rated?language=ko-KR&page=1')
    console.log(res.data)
  }
  const upcomingReq = async () => {
    let res = await api.get('/movie/upcoming?language=ko-KR&page=1')
    console.log(res.data)
  }
  const genreReq = async () => {
    let res = await api.get('/genre/movie/list?language=ko')
    console.log(res.data)
  }

  // 3가지 종류의 영화목록을 묶어서 요청하는 방법
  // - Promise.all() : 모든 요청에 대한 응답이 올 때까지 대기
  const getMovieList = async () => {
    setLoading(true) // 데이터를 가져오기 전

    console.log('테스트', popularMovies)

    const popularList = api.get('/movie/popular?language=ko-KR&page=1')
    const topRatedList = api.get('/movie/top_rated?language=ko-KR&page=1')
    const upcomingList = api.get('/movie/upcoming?language=ko-KR&page=1')
    const genreList = api.get('/genre/movie/list?language=ko')

    const [popular, topRated, upcoming, genre] = await Promise.all([
      popularList,
      topRatedList,
      upcomingList,
      genreList
    ])
    console.log(popular.data)
    console.log(topRated.data)
    console.log(upcoming.data)
    console.log('테스트2222222222222222', genre.data)

    dispatch(
      MovieReducerActions.initData({
        popular: popular.data,
        topRated: topRated.data,
        upcoming: upcoming.data,
        genre: genre.data
      })
    )
  }

  useEffect(() => {
    getMovieList()
    // popularReq()
    // topRatedReq()
    // upcomingReq()
  }, [])

  return (
    <div>
      {!loading ? (
        <ClipLoader
          color="#ffffff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          {popularMovies && <Banner movie={popularMovies[0]} />}
          {/* <Banner movie={popularMovies[0]} /> */}

          <h1>인기있는 영화</h1>
          <MovieSlide movies={popularMovies} />
          <h1>평점이 높은 영화</h1>
          <MovieSlide movies={topRatedMovies} />
          <h1>개봉예정인 영화</h1>
          <MovieSlide movies={upcomingMovies} />
        </div>
      )}
    </div>
  )
}

export default Home
