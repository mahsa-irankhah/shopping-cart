import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//components
import Card from './shared/Card';

//context 
import { cartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const { state, dispatch } = useContext(cartContext);
    
    return (
      <div>
        {state.selectedItems.map((item) => (
          <Card key={item.id} data={item} />
        ))}

        {state.itemsCounter > 0 && (
          <div>
            <p>total items: {state.itemsCounter}</p>
            <p>total payments: {state.total}</p>
            <div>
              <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                checkout
              </button>
              <button onClick={() => dispatch({ type: "CLEAR" })}>clear</button>
            </div>
          </div>
        )}

        {state.checkout && (
          <div>
            <h3>checked out successfully</h3>
            <Link to="/products">buy more</Link>
          </div>
        )}

        {!state.checkout && state.itemsCounter === 0 && (
          <div>
            <h3>want to buy?</h3>
            <Link to="/products">Go to Shop</Link>
          </div>
        )}
      </div>
    );
};

export default ShopCart;