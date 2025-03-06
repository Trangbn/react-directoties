import {createContext, useReducer} from "react";


const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
});

function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const existingCartItemIndex = state.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem[existingCartItemIndex],
                quantity:  existingItem[existingCartItemIndex].quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }
        return {...state, items: updatedItems};
    }

    if (action.type === "REMOVE_ITEM") {
        const existingCartItemIndex = state.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {...existingCartItem, quantity: existingCartItem.quantity - 1};
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems
        }
    }
    return state;
}

function CartContextProvider({ children }) {

    useReducer(cartReducer, {items: []});
    return <CartContext value={{ items: items }}>{children}</CartContext>;
}

export default CartContext;