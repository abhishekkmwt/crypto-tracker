import React from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import './style.css';
import Tooltip from '@mui/material/Tooltip';
import convertNumber from '../../../functions/convertNumber';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

function List({coin, key,delay}) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.tr key={key} className='list-row' 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}>
        <Tooltip title={coin.name} placement="bottom-start">
          <td className='img-name'>
              <img src={coin.image} alt={coin.id}/>
              <div className='symbol-name'>
                <h3 className='symbol-size'>{coin.symbol}</h3>
                <h5 className='coin-name-size'>{coin.name}</h5>
              </div>
          </td>
        </Tooltip>
        <td className='price_change_percentage_24h '>
          <Tooltip title="Price change percentage 24h" placement="bottom-start">
           <h5 className={coin.price_change_percentage_24h >0 ?'price_change_percentage_24h-green icon-2':'price_change_percentage_24h-red icon-2'}>{coin.price_change_percentage_24h >0 && <span>+</span>}{coin.price_change_percentage_24h.toFixed(2)}%</h5>
          </Tooltip>
        </td>
        <td className='price_change_percentage_24h icon-1'>
          <div className={coin.price_change_percentage_24h >0 ? 'icon-green':'icon-red'} >{coin.price_change_percentage_24h >0 ? <TrendingUpIcon/> : <TrendingDownIcon/>}</div>
        </td>
        <td className={coin.price_change_percentage_24h >0 ? 'price-green':'price-red'}>
          <Tooltip title="Current Price" placement="bottom-start">
            ${coin.current_price.toLocaleString()}
          </Tooltip>
        </td>
        <td className='volume-marketcap desktop-volume'>
        <Tooltip title="Total Volume" placement="bottom-start">
            <p><span>${coin.total_volume.toLocaleString()}</span></p>
        </Tooltip>
        </td>
        <td className='mobile-volume'>
        <Tooltip title="Total Volume" placement="bottom-start">
            <p><span>${convertNumber(coin.total_volume)}</span></p>
        </Tooltip>
        </td>
        <td className='volume-marketcap desktop-marketcap'>
        <Tooltip title="Market Cap" placement="bottom-start">
          <p><span>${coin.market_cap.toLocaleString()}</span></p>
        </Tooltip>
        </td>
        <td className='mobile-marketcap'>
        <Tooltip title="Market Cap" placement="bottom-start">
          <p><span>${convertNumber(coin.market_cap)}</span></p>
        </Tooltip>
        </td>
    </motion.tr>
    </Link>
  )
}

export default List