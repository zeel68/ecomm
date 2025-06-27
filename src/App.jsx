import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Navbar from './Comonent/navbar/Navbar';
import Footer from './Comonent/Footer/Footer';
import Categoryitem from './Comonent/Category_Page2/Categoryitem';
import Cart from './Comonent/Cart/Cart';
import Product from './Comonent/productdisplay/Product';
import Cat from './Comonent/Category_Page2/Cat';
import Bestdeals from './Comonent/Bestdealpage/Bestdeals';
import MainPage from './Comonent/Arrivalpage/MainPage';
import Onsale from './Comonent/Onsalepage/Onsale';
import Addcart from './Comonent/Addcart/Addcart';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Cat />} />
        <Route path="/onsale" element={<Onsale />} />
        <Route path="/Arrival" element={<MainPage />} />
        <Route path="/BestDeals" element={<Bestdeals />} />

        <Route path='/product' element={<Product />} />
        <Route path="/Product/:ProductId" element={<Product />} />
        <Route path="/cart" element={<Addcart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
