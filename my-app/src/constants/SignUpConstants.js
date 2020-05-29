
export const initialFormValues = {
        username: '',
        password: '',
        rePassword: '',
        phone: '',
}
export const initialErrors = {
        username: '',
        usernameHasErrors: false,
        password: '',
        passwordHasErrors: false,
        rePassword: '',
        rePasswordHasErrors: false,
        phone: '',
        phoneHasErrors: false
}

export const formatMyphone = (phone)=>{
        if (phone.length === 0) {
                return phone
        } else if (phone.length < 4) {
                return [`(${phone})`, phone]
        }else if (phone.length < 7) {
                return [`(${phone.slice(0, 3)}) - ${phone.slice(3, 6)}`,  phone]
        }else {
                return [`(${phone.slice(0, 3)}) - ${phone.slice(3 , 6)} - ${phone.slice(6, 10)}`, phone]
        }
}