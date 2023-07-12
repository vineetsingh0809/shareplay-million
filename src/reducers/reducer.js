// reducer.js
import { UPDATE_H2_VALUE } from "../actions/actions";

const initialState = {
  h2Value: "$4.95",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_H2_VALUE:
      return {
        ...state,
        h2Value: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;