import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./ProductDetails.css";

// context
import { productsContext } from '../context/ProductsContextProvider'

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;

    const productsData = useContext(productsContext);
    const product = productsData[id - 1];
    let {title, image, description, category, price} = product;

    return (
      <div className="details-container d-flex justify-content-center align-items-center">
        <div className="product-image-div">
          <img src={image} alt="product" className="img-fluid w-75" />
        </div>
        <div className="product-info-div border rounded p-4 w-100 h-75 shadow">
          <div>
            <h2 className='pb-3 text-primary'>{title}</h2>

            <p>{description}</p>
            <p>
              category: <span className='text-warning'>{category}</span>
            </p>
          </div>
          <div>
            <span className='text-success fw-bold'>{price} $</span>
            <Link to="/products" className='back-button btn btn-primary d-block mt-3'>back to the shop</Link>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;