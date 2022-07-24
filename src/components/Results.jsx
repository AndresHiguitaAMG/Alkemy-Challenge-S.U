import { React , useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from '@sweetalert/with-react';

const Results = () => {
  const [ moviesResults, setMoviesResults ] = useState([]);
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=2dcdffce8dec8289f676122b07053086&language=es-ES&query=${keyword}`
    axios.get(endPoint).then(res => {
      const searchMovie = res.data.results;
      searchMovie.length === 0 ? swal(<h5>Not found</h5>) : setMoviesResults(searchMovie);
    }).catch(error => {
      console.log(error);
    })
  }, [keyword]);
   
  return (
    <div>
      {moviesResults.length === 0 && <h3>Not found</h3>}
      <div className="row">
        {
          moviesResults.map((element, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card my-4">
                  <img src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`} className="card-img-top" alt="alternative"/>
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <Link to={`/detail?movieId=${element.id}`} className="btn btn-primary">View detail</Link>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Results;