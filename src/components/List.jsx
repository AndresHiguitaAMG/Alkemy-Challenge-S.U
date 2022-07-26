import { Link, Redirect  } from 'react-router-dom';
import { React , useEffect, useState } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react';


const List = (props) => {
  console.log(props)
  const [ movieList, setMovieList ] = useState([]);
  let token = sessionStorage.getItem("token");

  useEffect(() => {
    const myEndpoint = "https://api.themoviedb.org/3/discover/movie?api_key=2dcdffce8dec8289f676122b07053086&language=es-ES&page=1";
    axios.get(myEndpoint)
    .then(response => {
      const myData = response.data;
      setMovieList(myData.results);
    }).catch(error => {
     swal(<h2>Hubó un error, intenta de nuevo</h2>);
    })
  }, [setMovieList]);

  return (
    <>
    {
      !token && <Redirect to={"/"} />
    }
      <div className="row">
        {
          movieList.map((element, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card my-4">
                  <img src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`} className="card-img-top" alt="alternative"/>
                  <button 
                  className='favourite-btn' 
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={element.id}
                  >
                  🖤</button>
                <div className="card-body">
                  <h5 className="card-title">{element.title.substring(0,30)}...</h5>
                  <p className="card-text">{element.overview.substring(0, 110)}...</p>
                  <Link to={`/detail?movieId=${element.id}`} className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default List;