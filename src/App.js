import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/bootstrap.min.css';
import Login from "./components/Login";
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Results from './components/Results';

function App() {
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/list' component={List} />
          <Route path='/detail' component={Detail} />
          <Route path='/results' component={Results} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;