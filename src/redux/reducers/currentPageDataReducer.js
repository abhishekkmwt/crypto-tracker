import { CURRENT_PAGE } from "../actions/allActions";

let initialState = {
    current_page:1
}

export const currentPageDataReducer = (state=initialState, action)=>{
    switch(action.type){
        case CURRENT_PAGE: return{
            ...state,
            current_page:action.payload
        }
        default:return state;
    }
}