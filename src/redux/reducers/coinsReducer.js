import { COINS_SUCCESS, COINS_ERROR, COINS_LOADING } from "../actions/allActions";

let initialState ={
    loading: false,
    coins_data: [],
    error_data: null
}

export const coinsReducer = (state=initialState,action) =>{
    switch(action.type){
        case COINS_LOADING:return{
            ...state,
            loading: true
        }
        case COINS_ERROR:return{
            ...state,
            loading: false,
            error_data: action.payload
        }
        case COINS_SUCCESS:return{
            ...state,
            loading:false,
            coins_data: action.payload
        }
        default:return state;
    }
}