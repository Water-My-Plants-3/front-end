import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'

import './App.css';


import PlantForm from './components/PlantForm'
import SignUp from './components/Signup'

import Login from './components/Login'
import Plants from './components/Plants'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        PLANTS LIFE 🌵
        <Router>
          <div className="App">
            <ul>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path='/login'  component={Login}>
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}
export default App;