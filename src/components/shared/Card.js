import React, { useContext } from 'react';
import "./Card.css";

//context
import { cartContext } from '../../context/CartContextProvider';

//functions
import { shorten } from '../../helper/functions';

const Card = (props) => {

    const {image, title, price, quantity} = props.data;

    const {dispatch} = useContext(cartContext);

    return (
      <div className="cart-card-container bg-light shadow-sm border rounded p-2 ms-2 me-3 mb-5">
        <div className="card-img-container">
          <img src={image} alt="product" className="cart-image" />
        </div>

        <div className="title-price-div">
          <h3 className="fw-bold text-primary">{shorten(title)}</h3>
          <p className="fw-bold text-success mt-4">{price}$</p>
        </div>
        <div className=" fw-bold border border-success rounded p-2">
          {quantity}
        </div>
        
          <div>
            {quantity > 1 ? (
              <button
                className="btn btn-warning fw-bold text-light"
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: props.data })
                }
              >
                -
              </button>
            ) : (
              <button
                className="btn btn-danger fw-bold"
                onClick={() =>
                  dispatch({ type: "REMOVE-ITEM", payload: props.data })
                }
              >
                delete
              </button>
            )}
          </div>
          <div>
            <button
              className="btn btn-primary fw-bold"
              onClick={() =>
                dispatch({ type: "INCREASE", payload: props.data })
              }
            >
              +
            </button>
          </div>
        
      </div>
    );
};

export default Card;