import React from 'react'
// import Hader from './components/hader/Hader'

import Navbar from './components/hader/Navbar'
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Footer from './components/footer/Footer';
import Web from './components/Webdevelipment/Web';

import Contact from './components/contact/Contact';
import whatapp from '../src/components/assets/WhatsApp.png'
import Product from './components/product/Product';
import About from './components/AboutAs/About';


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<Web/>} />
          <Route path="/products"  element={<Product/>} />
          <Route path="/AboutAs"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
         
        </Routes>
        <Footer/>
        <div className='fixed-bottom right-100 p-3' style={{zIndex: '6', left: 'initial'}} >
      <a href='https://wa.me/message/356ZNFGLQ6VRE1 ' target='_blank'>
      <img src={whatapp} width='80' alt="help..." /></a>
        </div>
      </Router>
      
      
    </div>
  )
}

export default App