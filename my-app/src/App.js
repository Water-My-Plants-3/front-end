import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
// import SignUpForm from "./components/SignUp";
import Signup from "./components/Signup";
import { initialFormValues } from "./constants/SignUpConstants";
import LoginForm from './components/Login';
import { initialLoginFormValues } from "./constants/LoginFormConstants";
import PlantForm from "./components/PlantForm";
import Plants from "./components/Plants";

function App() {

  // signup form state hooks ________________________________________________________
  const [signUpformValues, setSignUpformValues] = useState(initialFormValues)
  const [signUpValid, setSignUpValid] = useState(false)
  // signup form event handlers_________________________________________________________
  const signUpOnChange = event => {
    setSignUpformValues({
      ...signUpformValues, [event.target.name]: event.target.value
    })
    if (false) {
      setSignUpValid(true)
    }
  }
  const signUpOnSubmit = event => {
    event.preventDefault(); console.log('you clicked submit');
  }


  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
  const [LoginValid, setLoginValid] = useState(false)
  //login form event handlers
  const LoginOnChange = event => {
    setSignUpformValues({
      ...signUpformValues, [event.target.name]: event.target.value
    })
    if (false) {
      setSignUpValid(true)
    }
  }
  const LoginOnSubmit = event => {
    event.preventDefault(); console.log('you clicked submit');
  }


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
              {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
            </ul>
            <Switch>
              {/* <Route path="/login" component={Login} /> */}
              <Route path="/signup" component={Signup} />
              <Route path='/login'>
                <LoginForm LoginOnChange={LoginOnChange} LoginOnSubmit={LoginOnSubmit} loginFormValues={loginFormValues} LoginValid={LoginValid} />
              </Route>
            </Switch>
          </div>
        </Router>

        {/* // <div className="App">
    //   <Switch>
    //     <Route exact path='/' />
    //    <span>PLANTS LIFE 🌵</span>
    //    <Plants />
    //         <PlantForm />
    //         <Route path='/signup'>
    //           <SignUpForm onSubmit={signUpOnSubmit} onChange={signUpOnChange} formValues={signUpformValues} valid={signUpValid} />
    //         </Route>
    //   </Switch>
    // </div> */}
      </header>
    </div>
  );
}
export default App;
