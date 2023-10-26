import { DAYS} from "./allActions";


export const setSelectedDays= (days)=>{
    return {
        type: DAYS,
        payload: days
    }
}
