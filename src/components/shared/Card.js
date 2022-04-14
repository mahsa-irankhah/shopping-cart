import React, { useContext } from 'react';

//context
import { cartContext } from '../../context/CartContextProvider';

//functions
import { shorten } from '../../helper/functions';

const Card = (props) => {

    const {image, title, price, quantity} = props.data;

    const {dispatch} = useContext(cartContext);

    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price}$</p>
            </div>
            <div>
                {quantity}
            </div>
            <div>
                {quantity > 1 ? 
                <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button> :
                <button onClick={() => dispatch({type: "REMOVE-ITEM", payload: props.data})}>delete</button>}
            </div>
            <div>
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Card;