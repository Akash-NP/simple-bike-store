import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import reducer from './Reducer'

import BikesList from './bikeslist'


import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { getDefaultNormalizer } from "@testing-library/dom";




const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
  //,bikes: []
}

const store = createStore(reducer,initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer  />
      <BikesList></BikesList>
    </Provider>
  );
}

export default App;
