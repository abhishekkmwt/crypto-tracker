import React, { useState,useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { selectCrypto1, selectCrypto2 } from '../../../redux/actions/selectCryptoAction';
import { fetchCoins } from '../../../redux/actions/coinsAction';
import './style.css'
import SelectDays from '../../CoinPage/SelectDays';
import { fetchCoinsPage } from '../../../redux/actions/coinsPageAction';

export default function SelectCrypto({setCrypto1Data, setCrypto2Data}) {
  
    const dispatch = useDispatch();
    const {crypto1, crypto2} = useSelector(state=>state.selectCryptoReducer);

    

    useEffect(()=>{
        dispatch(fetchCoins());
    },[dispatch]);

    const {coins_data} = useSelector((state) => state.coinsReducer);
    
    console.log(coins_data);


    const handleChange1 = async (event) => {
        dispatch(selectCrypto1(event.target.value));

    };

    const handleChange2 = (event) => {
        dispatch(selectCrypto2(event.target.value));
        
    };

  return (
    <div className='select-compare-and-days'>
      <InputLabel id="demo-simple-select-label">Crypto1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto1}
          label="Crypto1"
          onChange={handleChange1}
          sx={{
            height:"2.5rem",
            color:"var(--white)",
            "& .MuiOutlinedInput-notchedOutline":{
                borderColor:"var(--white)",
            },
            "& .MuiSvgIcon-root":{
                color:"var(--white)",
            },
            "&& fieldset":{
                borderColor:"var(--white)",
            },
            "&:hover":{
                "&& fieldset":{
                    borderColor:"var(--pink)"
                },
            }
          }}
        >
            {coins_data && coins_data.map((coin,i)=>
                <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>
            )}
        </Select>

        <InputLabel id="demo-simple-select-label">Crypto2</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto2}
          label="Crypto2"
          onChange={handleChange2}
          sx={{
            height:"2.5rem",
            color:"var(--white)",
            "& .MuiOutlinedInput-notchedOutline":{
                borderColor:"var(--white)",
            },
            "& .MuiSvgIcon-root":{
                color:"var(--white)",
            },
            "&& fieldset":{
                borderColor:"var(--white)",
            },
            "&:hover":{
                "&& fieldset":{
                    borderColor:"var(--pink)"
                },
            }
          }}
        >
          {coins_data && coins_data.map((coin,i)=>
                <MenuItem value={coin.id} key={i}>{coin.name}</MenuItem>
            )}
          
        </Select>

        <SelectDays/>
    </div>
  );
}