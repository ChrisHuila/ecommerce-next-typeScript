"use client";
import { ReactNode, createContext, useReducer } from "react";
import { Product, ProductsContext } from "@/types";
import shopingCartReducer from "./shoopingCartReducer";
import { ADD_CART, CART_QUANTITY } from "@/types/index";

interface productProvaiderProps {
    children: ReactNode;
}

export const productsContext = createContext({} as ProductsContext);

const initialState = {
    cartitems: [],
    cartquantity: 0,
};

const ProductsProvaider = ({ children }: productProvaiderProps) => {
    const [state, dispatch] = useReducer(shopingCartReducer, initialState);

    const addCartProduct = (product: Product) => {
        dispatch({
            type: ADD_CART,
            payload: product,
        });

        cartQuantity(product);
    };

    const cartQuantity = (product: Product) => {
        dispatch({
            type: CART_QUANTITY,
            payload: product,
        });
    };

    return (
        <productsContext.Provider
            value={{
                cartitems: state.cartitems,
                cartquantity: state.cartquantity,
                addCartProduct,
            }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsProvaider;
