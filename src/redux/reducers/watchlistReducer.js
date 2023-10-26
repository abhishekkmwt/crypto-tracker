import { WATCHLIST } from "../actions/allActions";

let initialState = {
    watchlistData:[]
}

export const watchlistReducer = (state=initialState, action)=>{
    switch(action.type){
        case WATCHLIST: return{
            ...state,
            watchlistData:action.payload
        }
        default:return state;
    }
}