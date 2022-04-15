import React, { useContext } from 'react';
import "./Store.css";

// components
import Product from './shared/Product';

// context
import { productsContext } from '../context/ProductsContextProvider';

const Store = () => {

    const products = useContext(productsContext)
    return (
        <div className='container shop-container'>
            {products.map(item => <Product key={item.id} productData={item} />)}
        </div>
    );
};

export default Store;