import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Product.css"

// functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";

// context
import { cartContext } from "../../context/CartContextProvider";

const Product = ({ productData }) => {
  let {state, dispatch } = useContext(cartContext);

  return (
    <div className="product-div border rounded shadow">

      <img src={productData.image} alt="product" style={{ width: "200px" }} />

      <h3 className="pt-4 fw-bold">{shorten(productData.title)}</h3>

      <p className=" text-success fs-5 mt-3">{productData.price}$</p>

      <Link
        to={`/products/${productData.id}`}
        className="text-decoration-none fw-bold fs-5"
      >
        details
      </Link>

      <div className="quantity-buttons mt-3">

        {quantityCount(state, productData.id) === 1 && (
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch({ type: "REMOVE-ITEM", payload: productData })
            }
          >
            remove
          </button>
        )}

        {quantityCount(state, productData.id) > 1 && (
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
          >
            -
          </button>
        )}

        {quantityCount(state, productData.id) > 0 && (
          <span className="quantitiy-count">{quantityCount(state, productData.id)}</span>
        )}

        {isInCart(state, productData.id) ? (
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "INCREASE", payload: productData })}
          >
            +
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => dispatch({ type: "ADD-ITEM", payload: productData })}
          >
            add to cart
          </button>
        )}

      </div>
    </div>
  );
};

export default Product;
