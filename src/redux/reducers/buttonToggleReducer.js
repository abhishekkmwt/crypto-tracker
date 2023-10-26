import { BUTTON_TOGGLE } from "../actions/allActions";

let initialState = {
    toggled_value:"prices"
}

export const buttonToggleReduce = (state=initialState, action)=>{
    switch(action.type){
        case BUTTON_TOGGLE: return{
            ...state,
            toggled_value:action.payload
        }
        default:return state;
    }
}