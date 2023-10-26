import { DAYS } from "../actions/allActions";

let initialState = {
    selectedDays:30
}

export const daysReducer = (state=initialState, action)=>{
    switch(action.type){
        case DAYS: return{
            ...state,
            selectedDays:action.payload
        }
        default:return state;
    }
}