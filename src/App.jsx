import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import ContactUsPage from './pages/ContactUsPage'
import SahkarBhartiNews from './pages/SahkarBhartiNews'
import Lokpriya from './pages/Lokpriya'
import SubscriptionPage from './pages/SubscriptionPage'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
        <Route path='/shakarsamachar' element={<SahkarBhartiNews/>}/>
        <Route path='/lokpriya' element={<Lokpriya/>}/>
        <Route path='/subscription' element={<SubscriptionPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App