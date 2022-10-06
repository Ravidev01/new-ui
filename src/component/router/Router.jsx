import   {Routes,Route}    from 'react-router-dom'
import Home from '../home/Home'


import React from 'react'
import Navbar from '../navbar/Navbar'
import {Footer1,Footer }from '../footer/Footer'
import Industries from '../industries/Industries'
import Resources from '../resources/Resources'
import Features from '../features/Features'
import Pricing from '../pricing/Pricing'
import About from '../about/About'

function Router() {
  return (
    <>
    <Navbar/>
    <Routes>
    
        <Route exact path='/' element={<><Home/> <Footer /></>}/>
        <Route exact path='/features' element={<Features/>}/>
        <Route exact path='/pricing' element={<Pricing/>}/>
        <Route exact path='/industries' element={<Industries/>}/>
        <Route exact path='/resources' element={<Resources/>}/>
        <Route exact path='/about' element={<About/>}/>
    </Routes>
    <Footer1/>
    </>
  )
}

export default Router;