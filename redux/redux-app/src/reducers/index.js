import changeNumber from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber,
});

export default rootReducer;
