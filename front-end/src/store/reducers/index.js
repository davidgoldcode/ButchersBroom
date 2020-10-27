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
      name: "Paul",
      species: "",
      notes: "",
      frequency: "",
      lastWatered: "2000-03-03"
    },
    {
      name: "Rodrigo",
      species: "",
      notes: "",
      frequency: "",
      lastWatered: "2020-02-02"
    }
  ],
  username: "",
  email: "",
  error: "",
  user_id: "",
  isLoading: false
};

function addPlantReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: action.payload.username,
        email: action.payload.email,
        user_id: action.payload.id
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        user_id: action.payload.id,
        isLoading: false
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
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
        plants: [...action.payload.data]
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
