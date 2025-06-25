import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Navbar from './Comonent/navbar/Navbar';
import Footer from './Comonent/Footer/Footer';
import Categoryitem from './Comonent/Category_Page2/Categoryitem';
import Cart from './Comonent/Cart/Cart';
import Product from './Comonent/productdisplay/Product';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Categoryitem category="shop" />} />
        <Route path="/Onsale" element={<Categoryitem category="onsale" />} />
        <Route path="/Arrival" element={<Categoryitem category="shop" />} />
        <Route path="/BestDeals" element={<Categoryitem category="onsale" />} />

        <Route path='/product' element={<Product />} />
        <Route path="/Product/:ProductId" element={<Product />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
