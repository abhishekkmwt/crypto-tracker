import React, {useState,useEffect} from 'react';
import './style.css';
import Button from '../Button';
import TemporaryDrawer from './drawer';
import { NavLink } from 'react-router-dom';
import { Switch } from "@mui/material";
import { toast } from 'react-toastify';



function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <div className='navbar'>
      <div className='logo'>
      <h2><NavLink to="/">CryptoTracker<span style={{color:"var(--pink)"}}>.</span></NavLink></h2>
      </div>
      <div className='nav-links'>
        <Switch checked={darkMode} onClick={() => {changeMode()}}/>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/compare">Compare</NavLink>
        <NavLink to="/dashboard"><Button text={"Dashboard"} /></NavLink>
      </div>
      <div className='drawer'>
          <TemporaryDrawer/>
      </div>
    </div>
  );
}

export default Header;