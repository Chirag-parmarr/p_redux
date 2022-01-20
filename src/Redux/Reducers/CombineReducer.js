import { combineReducers } from "redux";
import dataReducer from "./Reducer";



export default combineReducers({
    data: dataReducer,
})