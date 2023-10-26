import { WATCHLIST} from "./allActions";


export const setWatchlist= (data)=>{
    return {
        type: WATCHLIST,
        payload: data
    }
}
