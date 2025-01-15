import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import {CartContext} from "./store/shopping-cart-context.jsx";
import Product from "./components/Product.jsx";

function App() {

  return (
    <CartContext.Provider value={ctxValue}>
      <Header/>
      <Shop onAddItemToCart={handleAddItemToCart}>
        {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
        ))}
      </Shop>
    </CartContext.Provider>
  );
}

export default App;
