import { Action } from "redux";
import { AppState } from "./AppState";
export const rootReducer = (state:AppState, action: Action) => state

// import {combineReducers} from 'redux'
// export const rootReducer = combineReducers({})