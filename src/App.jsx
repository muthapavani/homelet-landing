import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './landing_page/cards/card'
import Carousels from './landing_page/corousel/corousel'
import LandCards from './landing_page/cards/cardsl'
import Features from './landing_page/features/features'
import Footer from './landing_page/footer/footer'
import HeroSection from './landing_page/nav/nav'


function App() {
 

  return (
    <>
    
    < HeroSection/>
    <Cards/>
    <Carousels/>
    <LandCards/>
    <Features/>
    <Footer/>
 
    </>
  )
}

export default App
