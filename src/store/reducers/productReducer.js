import initialState from "../../ProductsObj/productObj";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        products: state.products.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              amount: product.amount + 1,
            };
          }
          return product;
        }),
        basket: state.basket + 1,
        sum: state.sum + action.payload.price,
      };
    case "REMOVE_FROM_BASKET":
      return {
        products: state.products.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              amount: product.amount - 1,
            };
          }
          return product;
        }),
        basket: state.basket - 1,
        sum: state.sum - action.payload.price,
      };
    default:
      return state;
  }
};

export default reducer;
