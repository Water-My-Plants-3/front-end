import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
<<<<<<< HEAD
import PrivateRoute from './utils/PrivateRoute'

import './App.css';

import PlantForm from './components/PlantForm'
import SignUp from './components/Signup'

import Login from './components/Login'
import Plants from './components/Plants'
=======
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import PlantForm from './components/PlantForm';
import SignUp from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Plants from './components/Plants';
>>>>>>> 55ac96a975cffa0bfdce4245554e1001985d9417

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
              <li>
                <Link to="/dashboard">dashboard</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/signup" component={SignUp} />
<<<<<<< HEAD
              <Route path='/login'  component={Login}>
              </Route>
=======
              <Route path='/login'  component={Login} />
              <Route path='/dashboard'  component={Dashboard} />
>>>>>>> 55ac96a975cffa0bfdce4245554e1001985d9417
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}
export default App;