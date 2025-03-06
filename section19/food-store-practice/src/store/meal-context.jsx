import {createContext, useContext, useEffect, useReducer, useState} from 'react';

export const MealContext = createContext({
    items: null,
    cartItems: null,
    addItemToCart: ()=>{},
    updateItemQuantity: ()=>{}
});

const cartItemIDs = JSON.parse(localStorage.getItem('cartItemIDs')) || [];

export function MealContextProvider({children}) {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartState, cartStateDispatch] = useReducer(cartReducer, {
        cartItems: []
    });

    useEffect(() => {
        async function loadMealItems() {
            const cartItemIDs = JSON.parse(localStorage.getItem('cartItemIDs')) || [];
            const response = await fetch('http://localhost:3000/meals');
            const data = await response.json();
            const cartData = data.filter(item => cartItemIDs.includes(item.id));
            setItems(data);
            setCartItems(cartData);
        }

        loadMealItems();
    }, []);

    function cartReducer(state, action) {
        if (action.type === 'ADD_ITEM') {
            const updatedItems = [...state.cartItems];
            const existingCartItemIndex = updatedItems.findIndex((item) => item.id === action.payload);

            const existingCartItem = updatedItems[existingCartItemIndex];
            if (existingCartItem) {
                updatedItems[existingCartItemIndex] = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1
                }
            } else {
                const newItem = cartItems.find((it) => it.id === existingCartItemIndex);
                updatedItems.push(newItem);
            }

            return {
                ...state,
                cartItems: updatedItems
            };
        }

        if (action.type === 'UPDATE_ITEM') {
            const updatedItems = [...state.cartItems];
            const updatedCartItemIndex = updatedItems.findIndex((item) => item.id === action.payload.productId);

            const updatedItem = {
                ...updatedItems[updatedCartItemIndex]
            };

            updatedItem.quantity += action.payload.amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedCartItemIndex, 1);
            } else {
                updatedItems[updatedCartItemIndex] = updatedItem;
            }

            return {
                ...state,
                cartItems: updatedItems,
            }
        }
    }

    function handleAddItemToCart(id) {
        const cartItemIDs = JSON.parse(localStorage.getItem('cartItemIDs')) || [];
        localStorage.setItem('cartItemIDs', JSON.stringify([
            ...cartItemIDs, id
        ]));

        cartStateDispatch({
            type: 'ADD_ITEM',
            payload: id
        });
    }

    function handleUpdateItemQuantity(productId, amount) {
        cartStateDispatch({
            type: 'UPDATE_ITEM',
            payload: {productId, amount}
        });
    }

    const contextValue = {
        items: items,
        cartItems: cartItems,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateItemQuantity
    }

    return <MealContext value={contextValue}>{children}</MealContext>;
}