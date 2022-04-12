import React from 'react';
import { Link } from 'react-router-dom';

// functions
import { shorten } from '../../helper/functions';

const Product = ({productData}) => {
    
    return (
      <div>
        <h3>{shorten(productData.title)}</h3>
        <div>
          <img
            src={productData.image}
            alt="product"
            style={{ width: "200px" }}
          />
        </div>
        <p>{productData.price}$</p>
        <Link to={`/products/${productData.id}`}>details</Link>
        <button>add to cart</button>
      </div>
    );
};

export default Product;