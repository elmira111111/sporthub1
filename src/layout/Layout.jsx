// import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
// import Sports from '../sports/Sports'
import HomePage from "../pages/home/HomePage"
const Layout = () => {
  return (
    <div>
          <HomePage/>

        <Header/>
        <Outlet/>
        <Footer/>
     </div>
  )
}

export default Layout