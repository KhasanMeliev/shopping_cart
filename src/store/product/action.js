import productApi from "../../api/productApi";

export const getAllProducts = () => (dispatch) => {
  productApi
    .getAllProducts()
    .then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    })
    .catch((err) => console.log(err.response.data));
};
