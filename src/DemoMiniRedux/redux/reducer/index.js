import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";

let rootReducer = combineReducers({
  numberReducer,
});

export default rootReducer;
