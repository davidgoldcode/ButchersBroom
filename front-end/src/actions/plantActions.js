import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_USER_PLANT_LIST = "FETCH_USER_PLANT_LIST";
export const FETCH_USER_PLANT_LIST_ERROR = "FETCH_USER_PLANT_LIST_ERROR";
export const FETCH_USER_PLANT_LIST_SUCCESS = "FETCH_USER_PLANT_LIST_SUCCESS";

export const plantListActions = () => dispatch => {
  dispatch({ type: FETCH_USER_PLANT_LIST });

  axios
    .get(`plants/myplants`)
    .then(res => {
      dispatch({ type: FETCH_USER_PLANT_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_PLANT_LIST_ERROR, payload: err.message });
    });
};
