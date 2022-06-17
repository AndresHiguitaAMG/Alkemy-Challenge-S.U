import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from "./components/Login/Login";
import List from './components/List/List';

function App() {
  return (
    <div>
      
      
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/list' component={List} />
      </Switch>
    </div>
  );
}

export default App;