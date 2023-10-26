import React from 'react'
import Header from '../Components/Common/Header'
import TabComponent from '../Components/Dashboard/Tab'
import Search from '../Components/Dashboard/Search'
import PaginationControlled from '../Components/Dashboard/Pagination'
import BackToTop from '../Components/Common/BackToTop'
import Footer from '../Components/Common/Footer'
function Dashboard() {
  return (
    <div>
        <Header/>
        <BackToTop/>
        <Search/>
        <TabComponent/>
        <PaginationControlled/>
        <Footer/>
    </div>
  )
}

export default Dashboard