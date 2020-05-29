import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { createUser } from "../actions/userActions";
import { signUpFormSchema } from "../constants/validation";
import { initialFormValues, initialErrors, formatMyphone } from "../constants/SignUpConstants";
import { formStyles } from "../styles/formStyles";
import * as yup from "yup";
import { useHistory, NavLink } from "react-router-dom";
const Signup = props => {
    
    const history = useHistory()
     //destructure styles
     const { StyledForm,
        StyledError,
        Tittle,
        StyledInputs,
        StyledButton
     } = formStyles
    // signup form state hooks ________________________________________________________
    const [ signUpformValues, setSignUpformValues ] = useState(initialFormValues)
    const [ errors, setErrors ] = useState(initialErrors)
    const [ signUpValid, setSignUpValid] = useState(false)
    const { username, 
        password, 
        rePassword,
        phone } = signUpformValues
    // console.log("props in SU", props);
    useEffect(() => {
        setSignUpformValues(signUpformValues)
        // console.log(formValues)
   }, [signUpformValues])

   const signUpOnChange = event => {
    event.persist()
    if (event.target.name === 'phone') {
        //state of phone
        setSignUpformValues({...signUpformValues, [event.target.name]:event.target.value.replace(/\D/g, "")})
        // validation of phone
        yup.reach(signUpFormSchema, 'phone')
        .validate(event.target.value.replace(/\D/g, ""))
        .then( valid=>{
            console.log(valid);
            setErrors({...errors, phoneHasErrors: false, phone: ''})
        })
        .catch(err=>{
            setErrors({...errors, phoneHasErrors: true, phone: 'Invalid phone number'})
        })
        
    } else {
        setSignUpformValues({...signUpformValues, [event.target.name]:event.target.value})
         // validation of field
         yup.reach(signUpFormSchema, event.target.name)
         .validate(event.target.value, {
            abortEarly: false
        })
         .then( valid=>{
            setErrors({...errors, [`${event.target.name}HasErrors`]: false, [event.target.name]: ''})
            //  debugger
         })
         .catch(err=>{
             console.log(err);
        //state setting 
             setErrors({...errors, [`${event.target.name}HasErrors`]: true, [event.target.name]: err.message})
            //  debugger
         });


    }
    
}

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('you clicked submit', props);
        let x = {...signUpformValues}
        delete x.rePassword
        console.log(x)
        props.createUser(x);
        history.push("/login")
    };
//     useEffect(() => {
//         console.log("heyeer", props)
//    }, [props])
// signup form side effects______________________________________________________________
    useEffect(()=>{
        signUpFormSchema.isValid(signUpformValues)
        .then(valid=>{setSignUpValid(valid)})
    }, [signUpformValues])
    return (
        // <div>
        //     <form onSubmit={onSubmit}>
        //         <div>
        //             <label>Name: </label><br />
        //             <input type="text" name="username" onChange={onChange} value={formValues.namusernamee} />
        //         </div>
        //         <br />
        //         <div>
        //             <label>password: </label><br />
        //             <input name="password" onChange={onChange} value={formValues.password} />
        //         </div>
        //         <br />
        //         <div>
        //             <label>Phone number: </label><br />
        //             <input name="phone" onChange={onChange} value={formValues.phone} />
        //         </div>
        //         <br />
        //         <button type="submit">Submit</button>
        //     </form>
        // </div>
        <StyledForm onChange={signUpOnChange} onSubmit={onSubmit} className='signUpForm'>
            <Tittle>Create an Account</Tittle>
            <label>Username: </label>
            <StyledInputs  maxLength='256' type='text' className='username' name='username' value={username} placeholder='Username'/>
            <StyledError hidden={!errors.usernameHasErrors}>{errors.username}</StyledError>
            <label>Password: </label>
            <StyledInputs type='password' className='password' category='formValues' name='password' value={password} placeholder='password'/>
            <StyledError hidden={!errors.passwordHasErrors}>{errors.password}</StyledError>
            <label>Re-password: </label>
            <StyledInputs type='password' className='re-password' name='rePassword' value={rePassword} placeholder='re-password'/>
            <StyledError hidden={!errors.rePasswordHasErrors}>{errors.rePassword}</StyledError>
            <label>Phone Number: </label>
            <StyledInputs maxLength='18' type='tel' className='phone' name='phone' value={formatMyphone(phone)[0]}  placeholder='(123)-123-1234'/>
            <StyledError hidden={!errors.phoneHasErrors}>{errors.phone}</StyledError>
            <br/>
            <StyledInputs style={{margin: ' 0'}} type='submit' className='submitbtn' value='Create Account' disabled={!signUpValid}/>
            <br/>
            <NavLink to="/login"><StyledInputs type='button' style={{margin: ' 0'}} value='Login'/></NavLink>
            <br/>
            <NavLink to="/"><StyledInputs type='button' style={{margin: ' 0'}} value='Home'/></NavLink>

        </StyledForm>
    )
}

const mapStateToProps = state => {
    console.log('BRE', state);
    return {
        isFetching: state.isFetching,
        username: state.user.username,
        id: state.user.id,
        error: state.error,
    };
};

export default connect(
    mapStateToProps,
    { createUser }
)(Signup)
