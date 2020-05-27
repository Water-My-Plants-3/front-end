import React, {useState} from "react"


const SignUpForm  = (props) => {
    const { username, password, rePassword, phoneNumber } = props.formValues
    const {valid, onChange, onSubmit} = props

    return (
        <div onChange={onChange} onSubmit={onSubmit} className='signUpForm'>
            <label>Username: </label>
            <input  type='text' className='username' name='username' value={username} placeholder='Username'/>
            <label>Password: </label>
            <input type='password' className='password' category='formValues' name='password' value={password} placeholder='password'/>
            <label>Re-password: </label>
            <input type='password' className='re-password' name='rePassword' value={rePassword} placeholder='re-password'/>
            <label>Phone Number: </label>
            <input type='tel' className='phoneNumber' name='phoneNumber' value={phoneNumber} placeholder='(123)-123-1234'/>
            <input type='submit' className='submitbtn' value='Create Account' disabled={valid}/>
        </div>
    )
}
export default SignUpForm