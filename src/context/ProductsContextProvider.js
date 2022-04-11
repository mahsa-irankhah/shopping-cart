import React, { useState, useEffect, createContext } from 'react';

//API
import { getProducts } from '../services/api';

export const productsContext = createContext();

const ProductsContextProvider = (props) => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            setProducts(await getProducts());
        }

        fetchData();
        
    }, [])
    return (
        <div>
            <productsContext.Provider value={products}>
                {props.children}
            </productsContext.Provider>
        </div>
    );
};

export default ProductsContextProvider;