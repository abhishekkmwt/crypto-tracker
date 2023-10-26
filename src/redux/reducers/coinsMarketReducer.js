import { COINS_MARKET_ERROR,COINS_MARKET_LOADING,COINS_MARKET_SUCCESS,COINS_MARKET_SUCCESS_CRYPTO1,COINS_MARKET_SUCCESS_CRYPTO2 } from "../actions/allActions";

let initialState ={
    coin_market_loading: false,
    coin_market_data: null,
    coin_market_data_crypto1: null,
    coin_market_data_crypto2: null,
    coin_market_error: null
}

export const coinsMarketReducer = (state=initialState, action) =>{
    switch(action.type){
        case COINS_MARKET_LOADING:return{
            ...state,
            coin_market_loading: true
        }
        case COINS_MARKET_ERROR:return{
            ...state,
            coin_market_loading: false,
            coin_market_error: action.payload
        }
        case COINS_MARKET_SUCCESS:return{
            ...state,
            coin_market_loading:false,
            coin_market_data: action.payload
        }
        case COINS_MARKET_SUCCESS_CRYPTO1:return{
            ...state,
            coin_market_loading:false,
            coin_market_data_crypto1: action.payload
        }
        case COINS_MARKET_SUCCESS_CRYPTO2:return{
            ...state,
            coin_market_loading:false,
            coin_market_data_crypto2: action.payload
        }
        default:return state;
    }
}