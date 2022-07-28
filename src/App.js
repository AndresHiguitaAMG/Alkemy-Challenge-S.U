import { React, useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import './css/app.css';
import './css/bootstrap.min.css';
import Login from "./components/Login";
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Results from './components/Results';
import Fauvorites from './components/Fauvorites';

function App() {
  const [ fauvorites, setFauvorites ] = useState([]);

    useEffect(() => {
        const favsInLocal = localStorage.getItem("favs");
        if (favsInLocal !== null) {
            const favsArray = JSON.parse(favsInLocal);
            setFauvorites(favsArray)
        }
    }, []);

  const addOrRemoveFromFavs = e => {
    const favsMovies = localStorage.getItem("favs");
    let tempMoviesInFavs;
    if (favsMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favsMovies);
    }
    const btn = e.target;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const elementTitle = parent.querySelector("h5").innerText;
    const elementOverView = parent.querySelector("p").innerText
    const movieData = {
      imgURL,
      elementTitle,
      elementOverView,
      id: btn.dataset.movieId
    }
    let movieIsInArray = tempMoviesInFavs.find(inMovie => (inMovie.id === movieData.id));
    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFauvorites(tempMoviesInFavs);
    } else {
      let deleteMovie = tempMoviesInFavs.filter(movieInOff => {
        return movieInOff.id !== movieData.id
      });
      localStorage.setItem("favs", JSON.stringify(deleteMovie));
      setFauvorites(deleteMovie);
    }
  }

  return (
    <>
      <Header fauvorites={fauvorites}/>
      <div className='container mt-3'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/list' render={(props) => <List 
          addOrRemoveFromFavs={addOrRemoveFromFavs} {...props}
          />} />
          <Route path='/detail' component={Detail} />
          <Route path='/results' component={Results} />
          <Route path='/fauvorites' render={(props) => <Fauvorites fauvorites={fauvorites} addOrRemoveFromFavs={addOrRemoveFromFavs} {...props}
          />} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;