import {createContext, useContext, useEffect, useReducer, useState} from 'react';

export const MealContext = createContext({
    items: null,
    addItemToCart: ()=>{},
    updateItemQuantity: ()=>{}
});

export function MealContextProvider({children}) {

    const [items, setItems] = useState([]);
    const [cartState, cartStateDispatch] = useReducer(cartReducer, {
        items: []
    });

    useEffect(() => {
        async function loadMealItems() {
            const response = await fetch('http://localhost:3000/meals');
            const data = await response.json();
            setItems(data);
        }
        loadMealItems();
    }, []);

    function cartReducer(state, action){
        if (action.type === 'ADD_ITEM') {
            const updatedItems = [...state.items];
            const existingCartItemIndex = updatedItems.findIndex((item) => item.id === action.payload);

            const existingCartItem = updatedItems[existingCartItemIndex];
            if (existingCartItem) {
                updatedItems[existingCartItemIndex] = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1
                }
            } else {
                const newItem = items.find((it) => it.id === existingCartItemIndex);
                updatedItems.push(newItem);
            }

            return {
                ...state,
                items: updatedItems
            };
        }

        if (action.type === 'UPDATE_ITEM') {
            const updatedItems = [...state.items];
            const updatedCartItemIndex = updatedItems.findIndex((item) => item.id === action.payload.productId);

            const updatedItem = {
                ...updatedItems[updatedCartItemIndex]
            };

            updatedItem.quantity += action.payload.amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedCartItemIndex, 1);
            }else{
                updatedItems[updatedCartItemIndex] = updatedItem;
            }

            return {
                ...state,
                items: updatedItems,
            }
        }

    }

    function handleAddItemToCart(id){
        cartStateDispatch({
            type: 'ADD_ITEM',
            payload: id
        });
    }

    function handleUpdateItemQuantity(productId, amount){
        cartStateDispatch({
            type: 'UPDATE_ITEM',
            payload: {productId, amount}
        });
    }

    const contextValue = {
        items: items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateItemQuantity
    }

    return <MealContext value={contextValue}>{children}</MealContext>;
}