import { COINS_PAGE_SUCCESS, COINS_PAGE_ERROR, COINS_PAGE_LOADING, COINS_PAGE_SUCCESS_CRYPTO1, COINS_PAGE_SUCCESS_CRYPTO2 } from "../actions/allActions";

let initialState ={
    coin_page_loading: false,
    coin_page_data: null,
    coin_page_data_crypto1: null,
    coin_page_data_crypto2: null,
    coin_page_error: null
}

export const coinsPageReducer = (state=initialState,action) =>{
    switch(action.type){
        case COINS_PAGE_LOADING:return{
            ...state,
            coin_page_loading: true
        }
        case COINS_PAGE_ERROR:return{
            ...state,
            coin_page_loading: false,
            coin_page_error: action.payload
        }
        case COINS_PAGE_SUCCESS:return{
            ...state,
            coin_page_loading:false,
            coin_page_data: action.payload
        }
        case COINS_PAGE_SUCCESS_CRYPTO1:return{
            ...state,
            coin_page_loading:false,
            coin_page_data_crypto1: action.payload
        }
        case COINS_PAGE_SUCCESS_CRYPTO2:return{
            ...state,
            coin_page_loading:false,
            coin_page_data_crypto2: action.payload
        }
        default:return state;
    }
}