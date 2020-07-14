import { GET_DATA, PUT_DATA } from "../actions/pageActions";

export const initialState = {
  data: {},
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state };
    case PUT_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
