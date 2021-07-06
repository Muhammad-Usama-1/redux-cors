import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
// redux stuff
// Store - Sotore data, think of state
// Reducer - Function that need to update the store
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
// Initial Store

// Create store is looking for an argument and the argument is reducers function , and initail store
const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer store={store} />
    </Provider>
  );
}

export default App;
