import React from 'react';
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/LoginForm';
import Layout from './componet/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orderlists from './pages/Orderlists';
import Orderdetails from './pages/Orderdetails';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Layout />}>
              <Route path="/home/dashboard" element={<Dashboard />} />

              <Route path="/home/product" element={<Products />} />
              <Route path="/home/product/:id" element={<Orderdetails />} />
              <Route path="/home/product/productdetails" element={<ProductDetails />} />

              <Route path="/home/orderlist" element={<Orderlists />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
