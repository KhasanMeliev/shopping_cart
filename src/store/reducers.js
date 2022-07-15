import { combineReducers } from "redux";
import orders from "./order/reducer";
import product from "./product/reducer";
import user from "./user/reducer";

export default combineReducers({
  user,
  product,
  orders,
});
