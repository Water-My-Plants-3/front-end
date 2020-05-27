import React, { useState, useEffect} from 'react';

import './App.css';
import SignUpForm from "./components/SignUp";
import { Route, Switch } from "react-router-dom";
import { LoginForm } from './components/Login';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
      <header className="App-header">
       PLANTS LIFE 🌵
       <Plants />
       <PlantForm />
      </header>
      </Route>
      <Route path='/signup'>
        <SignUpForm/>
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
      </Switch>
    </div>
  );
}
export default App;
