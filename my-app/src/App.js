import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Signup from "./components/Signup";
import LoginForm from './components/Login';
import PlantForm from './components/PlantForm';
import Login from './components/Login';

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
              <Route path="/signup" component={Signup} />
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
