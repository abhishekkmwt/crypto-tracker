import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';
import WatchList from './pages/WatchList';


function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/coin/:id' element={<CoinPage/>}/>
        <Route path='/compare' element={<ComparePage/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
       </Routes>
    </div>
  );
}

export default App;
