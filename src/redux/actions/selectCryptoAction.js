import { CRYPTO1, CRYPTO2} from "./allActions";


export const selectCrypto1= (crypto)=>{
    return {
        type: CRYPTO1,
        payload: crypto
    }
}

export const selectCrypto2= (crypto)=>{
    return {
        type: CRYPTO2,
        payload: crypto
    }
}