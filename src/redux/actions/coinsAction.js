import { COINS_SUCCESS, COINS_ERROR, COINS_LOADING } from "./allActions";
import axios from "axios";

export const coins_loading=()=>{
    return{
        type:COINS_LOADING
    }
}

export const coins_success=(data)=>{
    return{
        type: COINS_SUCCESS,
        payload: data
    }
}

export const coins_error=(error)=>{
    return{
        type: COINS_ERROR,
        payload: error
    }
}

export const fetchCoins=()=>{
    return async (dispatch)=>{
        try{
            dispatch(coins_loading());
            let response=await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
            const coins = response.data;
            console.log(coins);
            dispatch(coins_success(coins));
        }catch(error){
            dispatch(coins_error(error.message));
        }
    }
}
