import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';


import PlantForm from './components/PlantForm'
import SignUp from './components/Signup'

import Login from './components/Login'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        PLANTS LIFE 🌵
      </header>
     

      <Login />


        {/* <Router>
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
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </Router> */}


    </div>
  );
}
export default App;