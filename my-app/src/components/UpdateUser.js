import react, { useState } from 'react'
import { updateUser } from '../actions/userActions'

const updateUserForm = props => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        phone: '',
    })

    const changeHandler= e => {
        setUser({
            ...setUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.updateUser(user)
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
            name = "username"
            type = "text" 
            placeholder = "update username"
            value = {user.username}
            onChange = {changeHandler}
            />
            <input
            name = "password"
            type = "password"
            value = {user.password}
            onChange = {changeHandler}
            />
            <input 
            name = "phone"
            type = "text"
            value = {user.phone}
            onChange = {changeHandler}
            />
          <button>Update!</button>
      </form>
        </>
    )
}

const mapStateToProps = state => {
    return{
        isFetching: state.isFetching,
        user: state.user,
        error: state.error,
    }
}

export default connect(
    mapStateToProps,
    {updateUser}
)(updateUserForm)