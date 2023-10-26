import { CURRENT_PAGE} from "./allActions";


export const currentPage= (page)=>{
    return {
        type: CURRENT_PAGE,
        payload: page
    }
}