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
      </header>
            <Switch>
         
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/plants/:id" component={Plants}/>
              <PrivateRoute path="" />
            </Switch>




    </div>
  );
}
export default App;