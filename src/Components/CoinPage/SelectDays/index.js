import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { setSelectedDays } from '../../../redux/actions/daysAction';
import './style.css'

export default function SelectDays() {
  
    const dispatch = useDispatch();
    const {selectedDays} = useSelector(state=>state.daysReducer);
  const handleChange = (event) => {
    dispatch(setSelectedDays(event.target.value));
  };

  return (
    <div className='select-days'>
      <InputLabel id="demo-simple-select-label">Price Change in the last</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedDays}
          label="Days"
          onChange={handleChange}
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
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
    </div>
  );
}