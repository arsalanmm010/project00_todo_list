import { combineReducers } from "redux";
import reducer from "./todoReducer";

const rootReducer = combineReducers({
  tasks: reducer,
});

export default rootReducer;
