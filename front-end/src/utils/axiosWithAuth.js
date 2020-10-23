import axios from "axios";

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    baseURL: "https://butchers-broom.herokuapp.com/",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export default axiosWithAuth;
