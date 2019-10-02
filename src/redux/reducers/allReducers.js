import { combineReducers } from "redux";
import { appStateReducer } from "./appStateReducer";
import { productDataReducer } from "./productDataReducer";

export default combineReducers({
  globalState: appStateReducer,
  productData: productDataReducer
});
