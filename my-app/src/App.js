import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import PlantForm from './components/PlantForm';
import SignUp from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { MarketingPage } from "../src/marketing-page/index";
import { About } from "../src/marketing-page/about";


function App() {


  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/" component={MarketingPage} />
            <Route path="/signup" component={SignUp} />
            <Route path='/login'  component={Login} />
            <Route path='/dashboard'  component={Dashboard} />
            <Route path='/about' component={About}/>
          </Switch>
      </Router>
    </div>
  );
}
export default App;