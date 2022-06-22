import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/bootstrap.min.css';
import Login from "./components/Login/Login";
import List from './components/List/List';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/list' component={List} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;