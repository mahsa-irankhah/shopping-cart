import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// context
import { productsContext } from '../context/ProductsContextProvider'

const ProductDetails = (props) => {

  const id = props.match.params.id;

    const productsData = useContext(productsContext);
    const product = productsData[id - 1];
    let {title, image, description, category, price} = product
    return (
      <div>
        <img src={image} alt="product" style={{width: "200px"}}/>
        <div>
          <h2>{title}</h2>
          <p>category: <span>{category}</span></p>
          <p>{description}</p>
        </div>
        <div>
            <span>{price}</span>
            <Link to="/products">back to the shop</Link>
        
        </div>
      </div>
    );
};

export default ProductDetails;