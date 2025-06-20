import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Landing from './Pages/Landing';
import './index.css';
import Category from './Comonent/Category/Category';
import Navbar from './Comonent/navbar/Navbar';
import Footer from './Comonent/Footer/Footer';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/shop' element={<Category />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App