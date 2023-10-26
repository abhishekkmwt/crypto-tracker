import { BUTTON_TOGGLE} from "./allActions";


export const buttonToggle= (value)=>{
    return {
        type: BUTTON_TOGGLE,
        payload: value
    }
}