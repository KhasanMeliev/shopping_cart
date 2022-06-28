import { createStore } from "redux";
import reducer from "../store/reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

export default store;
