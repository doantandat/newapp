import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";


const all = combineReducers({
 
});

export default createStore(all, applyMiddleware(thunk));
