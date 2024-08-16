import {
  ADD_ITEM_TO_CART_FAILURE,
  GET_CART_REQUEST,
  REMOVE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_REQUEST,
} from "./ActionType";

const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TOCART_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.cartItems],
        loading: false,
      };

    case ADD_ITEM_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GET_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        cartItems: action.payload.cartItems,
        loading: false,
      };
    case GET_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        loading: false,
      };

    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        loading: false,
      };

    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
