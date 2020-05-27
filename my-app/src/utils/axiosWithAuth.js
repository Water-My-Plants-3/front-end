import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://watermyplants-core.herokuapp.com/api",
  });
};

export default axiosWithAuth;