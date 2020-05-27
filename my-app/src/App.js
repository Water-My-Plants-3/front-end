import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import './App.css';

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
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
        </ul>
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
      </header>
    </div>
  );
}
export default App;
