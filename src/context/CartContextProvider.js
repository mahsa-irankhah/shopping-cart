import React, { useReducer, createContext } from 'react';

let initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0);
    return {itemsCounter, total}
    // in ecmascript 6 when the key and value of an abject are the same, you don't need to write both.
    // you can just write of of them : instead of {itemsCounter: itemsCounter, total: total} I just wrote {itemsCounter, total}
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD-ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            } return ({
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false
            })

        case "REMOVE-ITEM":
           const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
           return {
             ...state,
             selectedItems: newSelectedItems,
             ...sumItems(newSelectedItems),
           };

        case "INCREASE":
           const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
           state.selectedItems[indexI].quantity++;
           return {
             ...state,
             ...sumItems(state.selectedItems),
           };

        case "DECREASE":
           const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
           state.selectedItems[indexD].quantity--;
           return {
             ...state,
             ...sumItems(state.selectedItems),
           };

        case "CHECKOUT":
            return {
              selectedItems: [],
              itemsCounter: 0,
              total: 0,
              checkout: true,
            }

        case "CLEAR":
            return {
              selectedItems: [],
              itemsCounter: 0,
              total: 0,
              checkout: false,
            }

        default:
             return state;
    }
}

export const cartContext = createContext();

const CartContextProvider = ({children}) => {
    let [state, dispatch] = useReducer(cartReducer, initialState);


    return (
        <cartContext.Provider value={{state, dispatch}}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;