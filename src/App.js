import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Movies from './pages/Movies';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
  
  function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movies/:id' element={<MovieDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
