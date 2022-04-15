import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

// icons
import ShopCart from '../../icons/shopping-cart.svg';

//context
import { cartContext } from '../../context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(cartContext);

    return (
      <div className="nav-container position-fixed top-0 w-100 d-flex flex-row justify-content-around bg-light p-3 shadow">
        <div>
          <Link
            to="/products"
            className="text-primary fs-5 fw-bold text-decoration-none"
          >
            products
          </Link>
        </div>

        <div className="position-relative">
          <Link to="/cart">
            <img src={ShopCart} alt="shopping cart"/>
            <span className="text-light bg-success position-absolute top-0 start-0 ps-1 pe-1 rounded-circle fs-6">
              {state.itemsCounter}
            </span>
          </Link>
        </div>
      </div>
    );
};

export default Navbar;