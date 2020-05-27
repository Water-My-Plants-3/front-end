import React, {useState} from "react"

import { initialFormValues } from "../constants/SignUpConstants";

const SignUpForm  = (props) => {
    

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


    const { username, password, rePassword, phoneNumber } = signUpformValues

    return (
        <div onChange={signUpOnChange} onSubmit={signUpOnSubmit} className='signUpForm'>
            <label>Username: </label>
            <input  type='text' className='username' name='username' value={username} placeholder='Username'/>
            <label>Password: </label>
            <input type='password' className='password' category='formValues' name='password' value={password} placeholder='password'/>
            <label>Re-password: </label>
            <input type='password' className='re-password' name='rePassword' value={rePassword} placeholder='re-password'/>
            <label>Phone Number: </label>
            <input type='tel' className='phoneNumber' name='phoneNumber' value={phoneNumber} placeholder='(123)-123-1234'/>
            <input type='submit' className='submitbtn' value='Create Account' disabled={signUpValid}/>
        </div>
    )
}
export default SignUpForm