import React from 'react'

const Banner = ({movie}) => {
    console.log(movie?.poster_path)

    const div_style = {
        backgroundImage:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.poster_path})`
        // backgroundImage:`url(https://www.themoviedb.org/t/p/w220_and_h330_face/2Dk0mkkgjwCIJ7VMThFQP21g4gJ.jpg)`
    }

  return (
    <div className='background' style={div_style}>
      <div>
        <div className='title'>{movie?.title}</div>
        <div style={{width:'600px', marginLeft: '40px'}}>{movie?.overview}</div>
      </div>
    </div>
  )
}

export default Banner