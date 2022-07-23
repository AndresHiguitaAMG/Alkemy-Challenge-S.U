import { React, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  let token = sessionStorage.getItem("token");
  const [ idMovie, setidMovie ] = useState(null);

  let query = new URLSearchParams(window.location.search);
  let movieId = query.get("movieId");
  
  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=2dcdffce8dec8289f676122b07053086&language=en-ES`;
    axios.get(endPoint).then(response => {
      const movieData = response.data;
      setidMovie(movieData);
    })
  }, [movieId]);

  return (
    <>
    {
      !token && <Redirect to={"/"} />
    }
    {
      !idMovie && <p>Loading...</p>
    }
    {
      idMovie && 
    <>
      <h2>{idMovie.title}</h2>
      <div className='row'>
        <div className='col-4'>
          <img src={`https://image.tmdb.org/t/p/w500/${idMovie.poster_path}`} className="img-fluid" alt="alternative"/>
        </div>
        <div className='col-8'>
          <h6>Release Date: {idMovie.release_date}</h6>
          <h6>description:</h6>
          <p>{idMovie.overview}</p>
          <h6>Raiting: {idMovie.vote_average}</h6>
          <h6>Genres:</h6>
          <ul>
            {idMovie.genres.map(g => (
            <li key={g.id}>{g.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
    }
    </>
  )
}

export default Detail;