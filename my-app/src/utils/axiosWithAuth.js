import axios from 'axios'

const Auth = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.create({
        baseURL: " https://watermyplants-core.herokuapp.com/",
        headers: {
            "Authorization": `${token}`
        }
    })
}
export default Auth