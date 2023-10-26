import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { buttonToggle } from '../../../redux/actions/buttonToggleAction';

export default function ButtonToggle() {
  
    const dispatch = useDispatch();
    const {toggled_value} = useSelector(state=>state.buttonToggleReduce);
    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            // Only dispatch the action if a different toggle button is selected.
            dispatch(buttonToggle(newAlignment));
          }
    };

  return (
    <div className='toggle-group'>
    <ToggleButtonGroup
      value={toggled_value}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
          "& .Mui-selected":{
            color:"var(--pink) !important",
            backgroundColor:"rgba(255, 179, 203, 0.15)",
            borderColor:"var(--pink) !important"
          },
          borderColor:"var(--pink)",
          border:"unset !important",
          "& .MuiToggleButtonGroup-grouped":{
                borderColor:"unset",
                border:"1px solid !important",
                color:"var(--pink)",
            },
         "& .MuiToggleButton-standard":{
                color:"var(--pink)",
            },
      }}
    >
      <ToggleButton value="prices" aria-label="left aligned">
        PRICE
      </ToggleButton>
      <ToggleButton value="market_caps" aria-label="centered">
        MKT CAP
      </ToggleButton>
      <ToggleButton value="total_volumes" aria-label="right aligned">
        VOLUME
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}