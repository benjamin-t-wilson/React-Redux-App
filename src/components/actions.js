import axios from "axios";

// export variable values of action types to avoid errors due to misspelling
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_WIN = "FETCH_DATA_WIN"; // some people are bi-polar, I'm bi-winning
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

//created a proxy to allow me to bypass CORS
const proxy = "https://cors-anywhere.herokuapp.com/";

//action creator runs an axios request asynchronously
export const getFact = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(proxy + "https://cat-fact.herokuapp.com/facts/random")
    .then(res => {
      dispatch({ type: FETCH_DATA_WIN, payload: res.data.text });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err.message });
    });
};
