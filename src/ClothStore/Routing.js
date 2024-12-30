import React from 'react'
import ScrollToTop from './ScrollTop'
import Home from './Home'
import Shirts from './Shirts'
import TShirts from './TShirts'
import Pants from './Pants'
import Shoes from './Shoes'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/shirts' Component={Shirts} />
      <Route path='/TShirts' Component={TShirts}/>
      <Route path='/Pants' Component={Pants} />
      <Route path='/Shoes' Component={Shoes} />
      <Route path='/contact' Component={Contact} />
    </Routes>
    </>
  )
}

export default Routing