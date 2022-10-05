import   {Routes,Route}    from 'react-router-dom'
import Home from '../home/Home'


import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Industries from '../industries/Industries'
import Resources from '../resources/Resources'
import Features from '../features/Features'

function Router() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/features' element={<Features/>}/>
        <Route exact path='/industries' element={<Industries/>}/>
        <Route exact path='/resources' element={<Resources/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default Router;