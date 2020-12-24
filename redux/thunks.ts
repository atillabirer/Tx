import { ThunkAction } from "redux-thunk";
import { State } from "./store";
import { Action } from "redux";
import web3 from "web3";

const ETHERSCAN_KEY = "FB4WUVS1YH44XHY6MME8IK55A4EPDC9HTT";




export const getBalanceThunk 
=
 (address: string) : ThunkAction<void,State,unknown,Action<string>> => async dispatch => {
     dispatch({type:"REQUEST_BALANCE"})
     const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${ETHERSCAN_KEY}`;
     console.log(url)
     const result = await fetch(url);
     const parsed = await result.json()
     if(parsed.result) {
         
         dispatch({type:"SET_BALANCE",payload:web3.utils.fromWei(parsed.result,"ether")})
     }
 }