import { productReducerAction, stateReducer } from "@/types";
import { ADD_CART, INCREASE_CART_QUANTITY } from "@/types/index";

export default (state: stateReducer, action: productReducerAction): stateReducer => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                cartitems: [...state.cartitems, { ...action.payload, quantity: 1 }],
            };
        case INCREASE_CART_QUANTITY:
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
        default:
            return state;
    }
};
