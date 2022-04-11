import React, { useContext } from 'react';

// components
import Product from './shared/Product';

// context
import { productsContext } from '../context/ProductsContextProvider';

const Store = () => {

    const products = useContext(productsContext)
    return (
        <div>
            {products.map(item => <Product key={item.id} productData={item} />)}
        </div>
    );
};

export default Store;