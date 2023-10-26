import React, { useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import convertObject from '../../../functions/convertObject';

function CoinInfo({coin_page_data}) {

  const [flag, setFlag] = useState(false);
  
  
  return (
    <div className='grey-wrapper'>
    <h2>{coin_page_data && convertObject(coin_page_data).name}</h2>
    <p  className="description" 
        onClick={()=>setFlag(!flag)}
        dangerouslySetInnerHTML={{__html : 
          coin_page_data &&
          ((convertObject(coin_page_data).desc.length<200 ? convertObject(coin_page_data).desc :(flag ? convertObject(coin_page_data).desc + "<span style='color:var(--pink); cursor:pointer;'> Read Less...</span>" : 
          convertObject(coin_page_data).desc.slice(0, 250) + "<span style='color:var(--pink); cursor:pointer;'> Read More...</span>")))
    }}/>
    </div>
  )
}

export default CoinInfo;