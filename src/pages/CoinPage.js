import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoinsPage } from '../redux/actions/coinsPageAction';
import { fetchCoinsMarket } from '../redux/actions/coinsMarketAction';
import convertObject from '../functions/convertObject';
import List from '../Components/Dashboard/List';
import Loader from '../Components/Common/Loader';
import Header from '../Components/Common/Header'
import CoinInfo from '../Components/CoinPage/CoinInfo';
import LineChart from '../Components/CoinPage/LineChart';
import convertDate from '../functions/convertDate';
import SelectDays from '../Components/CoinPage/SelectDays';
import ButtonToggle from '../Components/CoinPage/ButtonToggle.js';
import Footer from '../Components/Common/Footer';

function CoinPage() {

  const dispatch = useDispatch();
  const {id} =useParams();

  const {selectedDays} = useSelector(state=>state.daysReducer);

  useEffect(()=>{
    dispatch(fetchCoinsPage(id));
    
  },[dispatch,id]);

  useEffect(()=>{
    dispatch(fetchCoinsMarket(id,selectedDays));
  },[id,selectedDays]);

 
  const {coin_page_loading, coin_page_data} = useSelector(state=>state.coinsPageReducer);
  const {coin_market_data} = useSelector(state=>state.coinsMarketReducer);
  const {toggled_value} = useSelector(state=>state.buttonToggleReduce);

  console.log(coin_page_data);
  const data = {
    labels: coin_market_data && ( toggled_value && coin_market_data[toggled_value].map(item=> convertDate(item[0]))),
    datasets: [{
      label:toggled_value.toUpperCase(),
      data: coin_market_data && ( toggled_value && coin_market_data[toggled_value].map(item=>(item[1]))),
      fill: true,
      borderWidth:1,
      borderColor: '#ca2c92',
      tension: 0.2,
      pointRadius:0,
      backgroundColor: 'rgba(255, 179, 203, 0.05)'
    }]
  };
  return (
    coin_page_loading ? <Loader /> :
    <div>
      <Header/>
      <div className='grey-wrapper'>
         {coin_page_data&& <List coin={convertObject(coin_page_data)} />}
      </div>
      <div className='grey-wrapper'>
        <SelectDays/>
        <ButtonToggle/>
         {coin_market_data && <LineChart chartData={data} multiAxis={false} />}
      </div>
      <CoinInfo coin_page_data={coin_page_data}/>
      <Footer/>
    </div>
  )
}

export default CoinPage