import { COINS_PAGE_SUCCESS, COINS_PAGE_ERROR, COINS_PAGE_LOADING, COINS_PAGE_SUCCESS_CRYPTO1, COINS_PAGE_SUCCESS_CRYPTO2 } from "./allActions";
import axios from "axios";

export const coins_page_loading=()=>{
    return{
        type:COINS_PAGE_LOADING
    }
}

export const coins_page_success=(data)=>{
    return{
        type: COINS_PAGE_SUCCESS,
        payload: data
    }
}

export const coins_crypto1_success=(data)=>{
    return{
        type: COINS_PAGE_SUCCESS_CRYPTO1,
        payload: data
    }
}

export const coins_crypto2_success=(data)=>{
    return{
        type: COINS_PAGE_SUCCESS_CRYPTO2,
        payload: data
    }
}

export const coins_page_error=(error)=>{
    return{
        type: COINS_PAGE_ERROR,
        payload: error
    }
}

export const fetchCoinsPage=(id)=>{
    return async (dispatch)=>{
        try{
            dispatch(coins_page_loading());
            let response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
            const coins = response.data;
            console.log(coins);
            dispatch(coins_page_success(coins));
        }catch(error){
            dispatch(coins_page_error(error.message));
        }
    }
}

export const fetchCoinsPageCrypto1=(id)=>{
    return async (dispatch)=>{
        try{
            dispatch(coins_page_loading());
            let response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
            const coins = response.data;
            console.log(coins);
            dispatch(coins_crypto1_success(coins));
        }catch(error){
            dispatch(coins_page_error(error.message));
        }
    }
}

export const fetchCoinsPageCrypto2=(id)=>{
    return async (dispatch)=>{
        try{
            dispatch(coins_page_loading());
            let response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
            const coins = response.data;
            console.log(coins);
            dispatch(coins_crypto2_success(coins));
        }catch(error){
            dispatch(coins_page_error(error.message));
        }
    }
}