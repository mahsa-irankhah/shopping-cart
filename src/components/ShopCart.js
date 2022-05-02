import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./ShopCart.css";

//components
import Card from './shared/Card';

//context 
import { cartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const { state, dispatch } = useContext(cartContext);
    
    return (
      <div>
        <div className="cart-container d-lg-flex">
          <div className="cart-cards d-md-block">
            {state.selectedItems.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
          <div className="payment-info d-md-block">
            {state.itemsCounter > 0 && (
              <div>
                <p className="fw-bold">
                  total items: {state.itemsCounter}
                </p>
                <p className="fw-bold">total payments: {state.total}</p>
                <div className="d-flex justify-content-evenly me-5 mt-5">
                  <button
                    className="btn btn-success me-5"
                    onClick={() => dispatch({ type: "CHECKOUT" })}
                  >
                    checkout
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: "CLEAR" })}
                  >
                    clear
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {state.checkout && (
          <div>
            <h3 className="ms-5 fs-1 fw-bold text-success">checked out successfully!</h3>
            <Link
              to="/products"
              className="btn btn-primary mt-5 ms-5 p-3 fw-bold"
            >
              buy more
            </Link>
          </div>
        )}

        {!state.checkout && state.itemsCounter === 0 && (
          <div>
            <h3 className="ms-5 fs-1 fw-bold">want to buy?</h3>
            <Link
              to="/products"
              className="btn btn-primary mt-5 ms-5 p-3 fw-bold"
            >
              Go to Shop
            </Link>
          </div>
        )}
      </div>
    );
};

export default ShopCart;