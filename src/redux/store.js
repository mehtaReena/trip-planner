import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore } from "redux";

import placeReducer from "./reducers/placeReducer";
import userReducer from "./reducers/userReducer";
import tripsReducer from "./reducers/tripsReducers"

let netReducer = combineReducers({ user: userReducer, places: placeReducer ,trips:tripsReducer })
export const store = createStore(netReducer , applyMiddleware(thunk))