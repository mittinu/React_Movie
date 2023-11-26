import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from './getData';
import Movie from './Movie'
import { useState } from 'react';
import './style.css';

export default function App() {

  let [movies, setMovies] = useState([]);
  let navigate = useNavigate();
  
  const loadMovie = async() => {
    let res = await getData();
    setMovies(res);
  };

  useEffect(() => {
    loadMovie();
  }, []);

  return (
    <div className="outer-div">
      {
        movies ? movies.map(function(a, i){
          return (
            <Movie movie={a} key={i}/>
          )
        }) : <span>로딩중..</span>
      }
    </div>
  );
}


