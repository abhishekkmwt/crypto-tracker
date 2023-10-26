import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {coinsReducer} from './reducers/coinsReducer'
import { searchedReducer } from "./reducers/searchedReducer";
import { currentPageDataReducer } from "./reducers/currentPageDataReducer";
import { coinsPageReducer } from "./reducers/coinsPageReducer";
import { coinsMarketReducer } from "./reducers/coinsMarketReducer";
import { daysReducer } from "./reducers/daysReducer";
import { buttonToggleReduce } from "./reducers/buttonToggleReducer";
import { selectCryptoReducer } from "./reducers/selectCryptoReducer";
import { watchlistReducer } from "./reducers/watchlistReducer";

const rootReducer = combineReducers({
    coinsReducer:coinsReducer,
    searchedReducer:searchedReducer,
    currentPageDataReducer:currentPageDataReducer,
    coinsPageReducer:coinsPageReducer,
    coinsMarketReducer:coinsMarketReducer,
    daysReducer:daysReducer,
    buttonToggleReduce:buttonToggleReduce,
    selectCryptoReducer:selectCryptoReducer,
    watchlistReducer:watchlistReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;