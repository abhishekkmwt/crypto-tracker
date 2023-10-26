import { CRYPTO1, CRYPTO2 } from "../actions/allActions";

let initialState = {
    crypto1:"bitcoin",
    crypto2:"ethereum"
}

export const selectCryptoReducer = (state=initialState, action)=>{
    switch(action.type){
        case CRYPTO1: return{
            ...state,
            crypto1:action.payload
        }
        case CRYPTO2: return{
            ...state,
            crypto2:action.payload
        }
        default:return state;
    }
}