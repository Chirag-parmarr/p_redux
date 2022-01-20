import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./Redux/Reducers/CombineReducer";

export const store = createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())