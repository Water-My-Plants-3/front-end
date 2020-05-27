import React, { useState, useEffect} from 'react';
import './App.css';
import SignUpForm from "./components/SignUp";
import { Route, Switch } from "react-router-dom";
import { initialFormValues } from "./constants/SignUpConstants";
import { LoginForm } from './components/Login';
import { initialLoginFormValues } from "./constants/LoginFormConstants";
function App() {


  // signup form state hooks ________________________________________________________
  const [ signUpformValues, setSignUpformValues ] = useState(initialFormValues)
  const [ signUpValid, setSignUpValid] = useState(false)
  // signup form event handlers_________________________________________________________
  const signUpOnChange = event => {
    setSignUpformValues({...signUpformValues, [event.target.name]:event.target.value
    })
    if (false) {
      setSignUpValid(true)
    }}
  const signUpOnSubmit = event => {event.preventDefault();console.log('you clicked submit');
  }
  // signup form side effects______________________________________________________________



  // login form state hooks
  const [ loginFormValues, setLoginFormValues ] = useState(initialLoginFormValues)
  const [ LoginValid, setLoginValid] = useState(false)
  //login form event handlers
  const LoginOnChange = event => {
    setSignUpformValues({...signUpformValues, [event.target.name]:event.target.value
    })
    if (false) {
      setSignUpValid(true)
    }}
  const LoginOnSubmit = event => {event.preventDefault();console.log('you clicked submit');
  }
  //login form side effects


  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
      <header className="App-header">
       PLANTS LIFE 🌵
      </header>
      </Route>
      <Route path='/signup'>
        <SignUpForm onSubmit={signUpOnSubmit} onChange={signUpOnChange} formValues={signUpformValues} valid={signUpValid}/>
      </Route>
      <Route path='/login'>
        <LoginForm LoginOnChange={LoginOnChange} LoginOnSubmit={LoginOnSubmit} loginFormValues={loginFormValues} LoginValid={LoginValid}/>
      </Route>
      </Switch>
    </div>
  );
}
export default App;
