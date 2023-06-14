"use client";
import { ProductReducerAction, StateReducer } from "@/types";

export default (state: StateReducer, action: ProductReducerAction): StateReducer => {
    switch (action.type) {
        case "ADD_CART":
            if (!state.cartitems?.some(item => item.id === action.payload.id)) {
                // add the product
                return {
                    ...state,
                    cartitems: [...state.cartitems, { ...action.payload, quantity: 1 }],
                };
            } else {
                //increase cart quantity
                return {
                    ...state,
                    cartitems: state.cartitems?.map(item =>
                        item.id === action.payload.id
                            ? {
                                  ...item,
                                  quantity: item.quantity && item.quantity + 1,
                              }
                            : item
                    ),
                };
            }
        case "MESSAGE_ADDED": {
            return {
                ...state,
                notificationadded: action.payload,
            };
        }
        case "REMOVE_FROM_CART":
            if (state.cartitems?.find(item => item.id === action.payload)?.quantity === 1) {
                return {
                    ...state,
                    cartitems: state.cartitems.filter(item => item.id !== action.payload),
                };
            } else {
                return {
                    ...state,
                    cartitems: state.cartitems?.map(item =>
                        item.id === action.payload
                            ? {
                                  ...item,
                                  quantity: item.quantity && item.quantity - 1,
                              }
                            : item
                    ),
                };
            }
        case "SET_LOCALSTORAGE":
            localStorage.setItem("shopping-cart", JSON.stringify(state.cartitems));
        case "CART_QUANTITY":
            return {
                ...state,
                cartquantity: state.cartitems.reduce(
                    (quantity, item) => (item.quantity ? item.quantity + quantity : 0),
                    0
                ),
            };
        case "TOTAL_PRICE":
            return {
                ...state,
                totalprice: state.cartitems.reduce(
                    (total, cartItem) => (cartItem.quantity ? Number(cartItem.price) * cartItem.quantity + total : 0),
                    0
                ),
            };
        default:
            return state;
    }
};
