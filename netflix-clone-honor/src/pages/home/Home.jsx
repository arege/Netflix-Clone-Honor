import React from 'react'
import Header from '../../components/Header/Nav'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Rows/RowList/RowList'



function Home() {
  return (
    
    <>
        <Header/>
        <Banner/>
        <RowList/>
        <Footer/>

    </>
  )
}

export default Home