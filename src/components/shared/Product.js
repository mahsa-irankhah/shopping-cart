import React from 'react';

// functions
import { shorten } from '../../helper/functions';

const Product = ({productData}) => {
    
    return (
        <div>
            <h3>{shorten(productData.title)}</h3>
            <div>image</div>
            <p>{productData.price}</p>
            <a href="/">details</a>
            <button>add to cart</button>
        </div>
    );
};

export default Product;