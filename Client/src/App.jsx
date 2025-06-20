import React from 'react';
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/LoginForm';
import Layout from './componet/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

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
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
};

export default App;
