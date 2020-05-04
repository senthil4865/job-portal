import {
  GET_APPLICATIONS,
  GET_CANDIDATES,
  GET_QUESTIONS,
  SET_LOADING,
  CANDIDATE_ERROR,
} from "../actions/types";

const initialState = {
  candidates: null,
  applications: null,
  questions: null,
  loading: false,
  videos:[],
  videoId:'',
  question:'',
  comment:'',
  comments:[],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATES:
      return {
        ...state,
        candidates: action.payload,
        loading: false,
      };
    case GET_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
        loading: false,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CANDIDATE_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
