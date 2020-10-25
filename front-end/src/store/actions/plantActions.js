import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const ADD_PLANT = "ADD_PLANT";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_ERROR = "ADD_PLANT_ERROR";

export const EDIT_PLANT = "EDIT_PLANT";
export const EDIT_PLANT_SUCCESS = "EDIT_PLANT_SUCCESS";
export const EDIT_PLANT_ERROR = "EDIT_PLANT_ERROR";

export const DELETE_PLANT = "DELETE_PLANT";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_ERROR = "DELETE_PLANT_ERROR";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const FETCH_USER_PLANT_LIST = "FETCH_USER_PLANT_LIST";
export const FETCH_USER_PLANT_LIST_SUCCESS = "FETCH_USER_PLANT_LIST_SUCCESS";
export const FETCH_USER_PLANT_LIST_ERROR = "FETCH_USER_PLANT_LIST_ERROR";

// API URL
const url = "https://butchers-broom.herokuapp.com";
const vercel = "https://butchers-broom.vercel.app/";

// load list
export const plantListActions = id => {
  return dispatch => {
    dispatch({ type: FETCH_USER_PLANT_LIST });
    console.log("its working!");
    axiosWithAuth()
      .get(`${url}/api/plants`, id)
      .then(res => {
        dispatch({ type: FETCH_USER_PLANT_LIST_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_USER_PLANT_LIST_ERROR, payload: err.message });
      });
  };
};

// Login
export const loginUser = info => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    axiosWithAuth()
      .post(`/api/auth/login`, info)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // window.location = `${vercel}/dashboard`;
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: {
            message: "Cant return"
          }
        });
      });
  };
};

// Register
export const registerUser = info => {
  return dispatch => {
    dispatch({ type: REGISTER_USER });
    axios
      .post(`${url}/api/auth/register`, info)
      .then(res => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: REGISTER_USER_ERROR, payload: err });
      })
      .finally(() => {
        window.location = `${vercel}/dashboard`;
      });
  };
};

// Add Plant
export const addPlant = info => {
  return dispatch => {
    console.log(info);
    dispatch({ type: ADD_PLANT });
    axiosWithAuth()
      .post("/api/plants/add", info)
      .then(res => {
        dispatch({
          type: ADD_PLANT_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_PLANT_ERROR,
          payload: {
            message: "Cant return"
          }
        });
      });
  };
};

// Edit Plant
export const editPlant = (id, info) => {
  return dispatch => {
    dispatch({ type: EDIT_PLANT });
    axiosWithAuth()
      .post(`/plant/${id}`, info)
      .then(res => {
        dispatch({
          type: ADD_PLANT_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ADD_PLANT_ERROR,
          payload: {
            message: "Cant return"
          }
        });
      });
  };
};

// Delete Plant
export const deletePlant = id => {
  return dispatch => {
    axiosWithAuth()
      .delete(`/plant/${id}`)
      .then(res => {
        console.log("I am the res ", res);
        dispatch({ type: DELETE_PLANT_SUCCESS, payload: id });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
