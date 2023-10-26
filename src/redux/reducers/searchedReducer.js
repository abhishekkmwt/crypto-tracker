import { SEARCHED_VALUE } from "../actions/allActions";

let initialState = {
    searched_data:""
}

export const searchedReducer = (state=initialState, action)=>{
    switch(action.type){
        case SEARCHED_VALUE:return{
            ...state,
            searched_data:action.payload
        }
        default:return state;
    }
}