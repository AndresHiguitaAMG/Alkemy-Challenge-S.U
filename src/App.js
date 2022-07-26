import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/app.css';
import './css/bootstrap.min.css';
import Login from "./components/Login";
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Results from './components/Results';

function App() {
  const favsMovies = localStorage.getItem("favs");
  console.log(favsMovies);
  let tempMovieInFavs;

  if (favsMovies === null) {
    tempMovieInFavs = [];
  } else {
  }
  console.log(tempMovieInFavs);

  const addOrRemoveFromFavs = e => {
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
    console.log(movieData);
  } 
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/list' render={(props) => <List 
          addOrRemoveFromFavs={addOrRemoveFromFavs} {...props}
          />} />
          <Route path='/detail' component={Detail} />
          <Route path='/results' component={Results} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;