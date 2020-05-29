import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://watermyplants-backend.herokuapp.com/api",
  });
};
// core
export default axiosWithAuth;