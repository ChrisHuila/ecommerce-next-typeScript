"use client";
import { ProductReducerAction, StateReducer } from "@/types";
import { ADD_CART, CART_QUANTITY } from "@/types/index";

export default (state: StateReducer, action: ProductReducerAction): StateReducer => {
    switch (action.type) {
        case ADD_CART:
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
        case CART_QUANTITY:
            return {
                ...state,
                cartquantity: state.cartitems.reduce(
                    (quantity, item) => (item.quantity ? item.quantity + quantity : 0),
                    0
                ),
            };
        default:
            return state;
    }
};
