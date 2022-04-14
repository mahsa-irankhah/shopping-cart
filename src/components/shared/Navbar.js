import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// icons
import ShopCart from '../../icons/shopping-cart.png';

//context
import { cartContext } from '../../context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(cartContext);

    return (
      <div>
        <div>
          <Link to="/products">products</Link>
          <div>
            <Link to="/cart">
              <img
                src={ShopCart}
                alt="shopping cart"
                style={{ width: "20px" }}
              />
              <span>{state.itemsCounter}</span>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;