import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch(`${this.$config.API_URL}/products`);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: res.data,
  });
};
