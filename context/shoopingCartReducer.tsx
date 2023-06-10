"use client";
import { productReducerAction, stateReducer } from "@/types";
import { ADD_CART } from "@/types/index";

export default (state: stateReducer, action: productReducerAction): stateReducer => {
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
        default:
            return state;
    }
};
