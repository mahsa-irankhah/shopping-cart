import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import './App.css';

// components
import Store from './components/Store';
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

// context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />}/>
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
