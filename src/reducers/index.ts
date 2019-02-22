import { combineReducers } from "redux";
import home from "./home";
import counter from "./counter";

export default combineReducers({
  home,
  counter
});
