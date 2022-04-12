import React, { useContext } from "react";
import { Link } from "react-router-dom";

// functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";

// context
import { cartContext } from "../../context/CartContextProvider";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div>
      <h3>{shorten(productData.title)}</h3>
      <div>
        <img src={productData.image} alt="product" style={{ width: "200px" }} />
      </div>
      <p>{productData.price}$</p>
      <Link to={`/products/${productData.id}`}>details</Link>

      {quantityCount(state, productData.id) === 1 && (
        <button
          onClick={() =>
            dispatch({ type: "REMOVE-ITEM", payload: productData })
          }
        >
          remove
        </button>
      )}
      {quantityCount(state, productData.id) > 1 && (
        <button
          onClick={() =>
            dispatch({ type: "DECREASE", payload: productData })
          }
        >
          -
        </button>
      )}

      {isInCart(state, productData.id) ? (
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: productData })}
        >
          +
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "ADD-ITEM", payload: productData })}
        >
          add to cart
        </button>
      )}
    </div>
  );
};

export default Product;
