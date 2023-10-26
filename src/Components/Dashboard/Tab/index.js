import React, { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "./../../../redux/actions/coinsAction";

import List from "../List";
import './style.css';
import Loader from "../../Common/Loader";

export default function TabComponent() {
  const style={
    color:"var(--white)",
    textTransform: "capitalize",
    fontWeight:600,
    fontSize: "1rem",
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  },[dispatch]);


  const { searched_data } = useSelector((state) => state.searchedReducer);
  const { current_page } = useSelector((state) => state.currentPageDataReducer);

  console.log(searched_data);

  

  const { loading, coins_data, error_data } = useSelector(
    (state) => state.coinsReducer
  );
  console.log(loading, coins_data, error_data);


  const filteredCoins = coins_data.filter((coin) =>
    (coin.symbol.toLowerCase().includes(searched_data.toLowerCase()) || coin.name.toLowerCase().includes(searched_data.toLowerCase()))
  );
    console.log(filteredCoins);

  let initialIndex = (current_page - 1)*10;
  let lastIndex = initialIndex + 10;
  const page_data= filteredCoins.slice(initialIndex, lastIndex);
    

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    loading ? <Loader/> :
    <div>
      <TabContext value={value}>
        <div>
          <TabList
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab label="Grid" value="1"  style={style}/>
            <Tab label="List" value="2" style={style}/>
          </TabList>
        </div>
        <TabPanel value="1">
          <div className="grid">
            {page_data.map((coin, i) => (
              <Grid coin={coin} key={i} delay={((i + 5) % 5) * 0.1}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <table className="list-table">
            {page_data.map((coin, i) => (
              <List coin={coin} key={i} delay={((i + 5) % 5) * 0.1}/>
            ))}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
