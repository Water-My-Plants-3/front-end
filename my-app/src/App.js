import React, { useState, useEffect} from 'react';

import './App.css';

import { Route, Switch } from "react-router-dom";
import { LoginForm } from './components/Login';
import  SignUp  from './components/Signup'


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
      <header className="App-header">
       PLANTS LIFE 🌵
      </header>
      <div>
        <SignUp />
      </div>

      </Route>
      <Route path='/signup'>

      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
      </Switch>
    </div>
  );
}
export default App;
