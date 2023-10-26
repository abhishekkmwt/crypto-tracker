import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "./../../../crypto-project/src/redux/actions/coinsAction";
import { setWatchlist } from '../redux/actions/watchlistAction';
import Loader from '../Components/Common/Loader';
import Header from '../Components/Common/Header';
import TabComponent from '../Components/Dashboard/Tab';

function WatchList() {
    const dispatch = useDispatch();
    const coins = JSON.parse(localStorage.getItem("watchlist"));

    useEffect(() => {
        dispatch(fetchCoins());
      },[dispatch]);

      const { loading, coins_data, error_data } = useSelector(
        (state) => state.coinsReducer
      );

      const {watchlistData} = useSelector(
        (state) => state.watchlistReducer
      );

      if(coins && coins_data){
        dispatch(setWatchlist(coins_data.filter((item) => coins.includes(item.id))));
      }

  return (
    <div>
        {
            loading ? <Loader/> :
            <div>
                {
                   watchlistData.length==0 ? 
                   <h2>No Items in the Watchlist</h2> :
                   <div>
                    <Header/>
                    <TabComponent/>
                   </div>
                }
                
            </div>
        }
    </div>
    )
}

export default WatchList