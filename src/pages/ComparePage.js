import React, { useState,useEffect } from "react";
import Header from "../Components/Common/Header";
import SelectCrypto from "../Components/Compare/SelectCrypto";
import { useSelector, useDispatch } from "react-redux";
import List from "../Components/Dashboard/List";
import convertObject from "../functions/convertObject";
import { fetchCoinsPageCrypto1, fetchCoinsPageCrypto2 } from "../redux/actions/coinsPageAction";
import CoinInfo from "../Components/CoinPage/CoinInfo";
import Loader from "../Components/Common/Loader";
import { fetchCoinsMarketCrypto1, fetchCoinsMarketCrypto2 } from "../redux/actions/coinsMarketAction";
import LineChart from "../Components/CoinPage/LineChart";
import ButtonToggle from "../Components/CoinPage/ButtonToggle.js";
import convertDate from "../functions/convertDate";
import Footer from "../Components/Common/Footer";

function ComparePage() {
  const dispatch = useDispatch();

  const { crypto1, crypto2 } = useSelector(
    (state) => state.selectCryptoReducer
  );

  const { selectedDays } = useSelector((state) => state.daysReducer);

  const {coin_page_loading,coin_page_data_crypto1, coin_page_data_crypto2} = useSelector(state=>state.coinsPageReducer);
  const {toggled_value} = useSelector(state=>state.buttonToggleReduce);
  const {coin_market_loading, coin_market_data_crypto1, coin_market_data_crypto2} = useSelector(state=>state.coinsMarketReducer);

  useEffect(()=>{
    dispatch(fetchCoinsPageCrypto1(crypto1));
    dispatch(fetchCoinsPageCrypto2(crypto2));
  },[crypto1,crypto2]);

  useEffect(()=>{
    dispatch(fetchCoinsMarketCrypto1(crypto1, selectedDays));
    dispatch(fetchCoinsMarketCrypto2(crypto2, selectedDays));

  },[crypto1,crypto2,selectedDays]);

  
  
  console.log(coin_market_data_crypto1, coin_market_data_crypto2);
  

  console.log(coin_page_data_crypto1, coin_page_data_crypto2);

  const data = {
    labels: coin_market_data_crypto1 && ( toggled_value && coin_market_data_crypto1[toggled_value].map(item=> convertDate(item[0]))),
    datasets: [
      {
      label:crypto1.toUpperCase(),
      data: coin_market_data_crypto1 && ( toggled_value && coin_market_data_crypto1[toggled_value].map(item=>(item[1]))),
      fill: true,
      borderWidth:1,
      borderColor: '#ca2c92',
      tension: 0.2,
      pointRadius:0,
      yAxisID:'y'

    },
    {
      label:crypto2.toUpperCase(),
      data: coin_market_data_crypto2 && ( toggled_value && coin_market_data_crypto2[toggled_value].map(item=> (item[1]))),
      fill: true,
      borderWidth:1,
      borderColor: '#fff',
      tension: 0.2,
      pointRadius:0,
      yAxisID:'y1'
      
    }
  ]
  };
  
  
  console.log(coin_market_data_crypto1,coin_market_data_crypto2);
  return (
    <div>
      <Header />
      <SelectCrypto/>
       {coin_page_loading ? <Loader/> :(
        <div>
          <div className="grey-wrapper">
              {coin_page_data_crypto1 && <List coin={convertObject(coin_page_data_crypto1)} />}
          </div>
          <div className="grey-wrapper">
              {coin_page_data_crypto2 && <List coin={convertObject(coin_page_data_crypto2)} />}
          </div>
          <div className='grey-wrapper'>
            <ButtonToggle/>
            {<LineChart chartData={data} multiAxis={true} />}
          </div>
          <CoinInfo coin_page_data={coin_page_data_crypto1}/>
          <CoinInfo coin_page_data={coin_page_data_crypto2}/>
       </div>)} 
        <Footer/>
    </div>
  );
}

export default ComparePage;
