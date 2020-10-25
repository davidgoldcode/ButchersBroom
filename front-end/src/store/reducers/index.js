import {
  ADD_PLANT,
  ADD_PLANT_SUCCESS,
  ADD_PLANT_ERROR,
  EDIT_PLANT,
  EDIT_PLANT_SUCCESS,
  EDIT_PLANT_ERROR,
  DELETE_PLANT,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_ERROR,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  FETCH_USER_PLANT_LIST,
  FETCH_USER_PLANT_LIST_SUCCESS,
  FETCH_USER_PLANT_LIST_ERROR
} from "../actions";

const initialState = {
  plants: [
    {
      name: "paul",
      species: "paulo",
      notes: "check one two one two",
      frequency: "",
      lastWatered: ""
    }
  ],
  username: "",
  email: "",
  error: "",
  isLoading: false
};

function addPlantReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case REGISTER_USER:
      return {
        ...state
      };
    case REGISTER_USER_SUCCESS:
      console.log(action.payload, "actionnnnn");
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case EDIT_PLANT:
      return {
        ...state
      };
    case EDIT_PLANT_SUCCESS:
      return {
        ...state,
        plants: action.payload
      };
    case EDIT_PLANT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ADD_PLANT:
      return {
        ...state
      };
    case ADD_PLANT_SUCCESS:
      return {
        ...state,
        plants: [...state.plants, action.payload]
      };
    case ADD_PLANT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_USER_PLANT_LIST:
      return {
        ...state
      };
    case FETCH_USER_PLANT_LIST_SUCCESS:
      return {
        ...state,
        plants: action.payload
      };
    case FETCH_USER_PLANT_LIST_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default addPlantReducer;
