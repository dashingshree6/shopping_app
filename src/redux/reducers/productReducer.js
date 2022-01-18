import { actionTypes } from "../actions/productActions";

const initialState = {
  products: []
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    default:
      return state;
  }
};
