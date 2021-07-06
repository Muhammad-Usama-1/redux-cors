import { CLEAR_CART, DECREASE, INCREASE, REMOVE, GET_TOTALS } from "./actions";
import cartItems from "./cart-items";

//Reducer function takes two argument- state(old state,state before update),action(what happened,what update)

const initialStore = {
  cart: cartItems,
  total: 104,
  amount: 5,
};
const reducer = (state = initialStore, action) => {
  // console.log({ state });
  switch (action.type) {
    case INCREASE: {
      return {
        ...state,
        cart: state.cart.map((c) => {
          if (c.id === action.payload.id) {
            c.amount = action.payload.amount + 1;
          }
          return c;
        }),
      };
    }
    case GET_TOTALS: {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return {
        ...state,
        total,
        amount,
      };
    }
    case DECREASE:
      let tempcart = "";
      if (action.payload.amount === 1) {
        tempcart = state.cart.filter((c) => c.id !== action.payload.id);
      } else {
        tempcart = state.cart.map((c) => {
          if (c.id === action.payload.id) {
            c.amount = action.payload.amount - 1;
          }
          return c;
        });
      }
      return {
        ...state,
        cart: tempcart,
      };

    case REMOVE: {
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
export default reducer;
