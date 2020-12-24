import { createStore, combineReducers, applyMiddleware } from "redux";
import { ActionTypes } from "./actions";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { act } from "react-test-renderer";


export interface State {
    address: string,
    transactions: string,
    balance: number,
    loading: boolean
}

const initialState : State = {
    address: "",
    transactions: "string",
    balance: 0,
    loading: false
}


 export function rootReducer(state = initialState, action: ActionTypes) : State {
     switch(action.type) {
         case "CHANGE_ADDRESS": {
             if(action.address) {
                 return {...state, address: action.address}
             }
         }
         case "REQUEST_BALANCE" : {

             return {...state,loading: true}
         }
         case "SET_BALANCE": {
             
             return {...state, balance: action.payload, loading: false}
         }
         default:
             return state;
     }
     return state;
     
}

export default createStore(rootReducer,applyMiddleware(logger,thunk))