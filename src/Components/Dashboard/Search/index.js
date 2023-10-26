import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './style.css'
import { searched_value } from '../../../redux/actions/searchedAction'; 
import { useSelector, useDispatch } from 'react-redux';
function Search() {
    let dispatch= useDispatch();
    
    const {searched_data} = useSelector(state=>state.searchedReducer);
  return (
    <div className='search'>
        <SearchIcon/>
        <input type='search' placeholder='Search' value={searched_data} onChange={(e)=>dispatch(searched_value(e.target.value))}/>
    </div>
  )
}

export default Search