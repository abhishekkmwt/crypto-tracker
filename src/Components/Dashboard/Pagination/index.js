import React, {useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {currentPage} from "../../../redux/actions/currentPageDataAction"; 
import { useDispatch, useSelector } from "react-redux";
import './style.css';

export default function PaginationControlled() {
    const dispatch = useDispatch();
    const {current_page } = useSelector((state) => state.currentPageDataReducer);
  
  const handleChange = (event, value) => {
    dispatch(currentPage(value));
  };

  return (
    <div className='pagination'>
      <Pagination count={10} page={current_page} onChange={handleChange} 
       sx={{
        color:"var(--white)",
        "& .Mui-selected" : {
            backgroundColor:"var(--pink) !important",
            color:"#fff !important",
            borderColor:"var(--pink) !important"
        },
        "& .MuiPaginationItem-ellipsis" : {
            border:"1px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text" : {
            color:"var(--white) !important",
            border:"2px solid var(--grey) !important",
        }
       }}
      />
    </div>
  );
}