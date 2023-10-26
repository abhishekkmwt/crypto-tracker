import { SEARCHED_VALUE } from "./allActions";

export const searched_value= (data)=>{
    return {
        type: SEARCHED_VALUE,
        payload: data
    }
}