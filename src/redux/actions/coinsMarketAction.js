import { COINS_MARKET_ERROR,COINS_MARKET_LOADING,COINS_MARKET_SUCCESS,COINS_MARKET_SUCCESS_CRYPTO1,COINS_MARKET_SUCCESS_CRYPTO2} from "./allActions";
import axios from "axios";

export const coins_market_loading=()=>{
    return{
        type:COINS_MARKET_LOADING
    }
}

export const coins_market_success=(data)=>{
    return{
        type: COINS_MARKET_SUCCESS,
        payload: data
    }
}

export const coins_market_success_crypto1=(data)=>{
    return{
        type: COINS_MARKET_SUCCESS_CRYPTO1,
        payload: data
    }
}

export const coins_market_success_crypto2=(data)=>{
    return{
        type: COINS_MARKET_SUCCESS_CRYPTO2,
        payload: data
    }
}

export const coins_market_error=(error)=>{
    return{
        type: COINS_MARKET_ERROR,
        payload: error
    }
}

export const fetchCoinsMarket=(id, days)=>{
    return async (dispatch)=>{
        try{
            dispatch(coins_market_loading());
            let response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
            const coins = response.data;
            console.log(coins);
            dispatch(coins_market_success(coins));
        }catch(error){
            dispatch(coins_market_error(error.message));
        }
    }
}

export const fetchCoinsMarketCrypto1=(id, days)=>{
    return async (dispatch)=>{
        try{
            dispatch(coins_market_loading());
            let response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
            const coins = response.data;
            console.log(coins);
            dispatch(coins_market_success_crypto1(coins));
        }catch(error){
            dispatch(coins_market_error(error.message));
        }
    }
}

export const fetchCoinsMarketCrypto2=(id, days)=>{
    return async (dispatch)=>{
        try{
            dispatch(coins_market_loading());
            let response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
            const coins = response.data;
            console.log(coins);
            dispatch(coins_market_success_crypto2(coins));
        }catch(error){
            dispatch(coins_market_error(error.message));
        }
    }
}