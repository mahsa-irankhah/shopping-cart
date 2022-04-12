import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import './App.css';

// components
import Store from './components/Store';
import ProductDetails from "./components/ProductDetails";

// context
import ProductsContextProvider from './context/ProductsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Redirect to="/products" />
      </Switch>
    </ProductsContextProvider>
  );
}

export default App;
