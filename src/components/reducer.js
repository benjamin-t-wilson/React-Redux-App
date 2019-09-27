//importing variable of action type names to prevent spelling errors
import {
  FETCH_DATA_START,
  FETCH_DATA_WIN,
  FETCH_DATA_FAIL
} from "./actions.js";

//setting initial state for store to work with
const initialState = {
  catCount: 0,
  catFact: "Uh oh! We have no facts! Press the button!",
  error: ""
};

//exporting reducer function, taking initialState as state, and an action object
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        catFact: "Finding fantastic feline facts...",
        error: ""
      };
    case FETCH_DATA_WIN:
      return {
        ...state,
        error: "",
        catFact: action.payload,
        catCount: (state.catCount += 1)
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        catFact: ""
      };
    default:
      return state;
  }
};
