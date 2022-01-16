import { actionTypes } from "../actions/productActions";

const initialState = {
  products: [
    {
      id: 1,
      title: "Productss",
      category: "shopping"
    }
  ]
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return state;
    default:
      return state;
  }
};
