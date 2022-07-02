import products from "../../ProductsObj/productObj";

const initialState = {
  products: products,
  sum: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        products: state.products.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              added: true,
              amount: product.amount + 1,
            };
          }
          return product;
        }),
        sum: state.sum + action.payload.price,
      };
    case "REMOVE_FROM_BASKET":
      return {
        products: state.products.map((product) => {
          if (product.id === action.payload.productId) {
            if (product.amount === 1) {
              return { ...product, amount: 0, added: false };
            }
            return {
              ...product,
              amount: product.amount - 1,
            };
          }
          return product;
        }),
        sum: state.sum - action.payload.price,
      };
    default:
      return state;
  }
};

export default reducer;
