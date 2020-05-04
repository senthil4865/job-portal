import {
  GET_CANDIDATES,
  GET_APPLICATIONS,
  GET_QUESTIONS,
  CANDIDATE_ERROR,
  SET_LOADING,
} from "./types";

export const getCandidates = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/candidates");
    const data = await res.json();

    dispatch({
      type: GET_CANDIDATES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CANDIDATE_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const getApplications = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/applications");
    const data = await res.json();

    dispatch({
      type: GET_APPLICATIONS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CANDIDATE_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const getQuestions = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/questions");
    const data = await res.json();

    dispatch({
      type: GET_QUESTIONS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CANDIDATE_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
