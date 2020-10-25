import axiosWithAuth from "./axiosWithAuth";

const url = "https://butchers-broom.herokuapp.com";

export function fetchPlantsApi(id) {
  return axiosWithAuth(id)
    .get(`${url}/api/plants`, id)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
}

export function fetchUserInfo() {
  return axiosWithAuth()
    .get("users/myinfo")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
}
