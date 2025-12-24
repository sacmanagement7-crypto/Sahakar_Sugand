import React from 'react'
import "./i18n";
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import ContactUsPage from './pages/ContactUsPage'
import Lokpriya from './pages/Lokpriya'
import SubscriptionPage from './pages/SubscriptionPage'
import MagazinePage from './pages/MagazinePage'
import AdsForm from './pages/WebAdsForm'
import SmarikaAdsForm from './pages/SmarikaAdsForm'
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/lokpriya' element={<Lokpriya />} />
        <Route path='/subscription' element={<SubscriptionPage />} />
        <Route path='/magzines' element={<MagazinePage />} />
        <Route path='/website-ads' element={<AdsForm />} />
        <Route path='/ads/smarika' element={<SmarikaAdsForm />} />
        <Route path="/news" element={<NewsList />} />
        <Route path='/news/:id' element={<NewsDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App