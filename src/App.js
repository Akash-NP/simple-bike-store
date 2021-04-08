import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import reducer from './Reducer'


import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 0
}

const store = createStore(reducer,initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer  />
    </Provider>
  );
}

export default App;
