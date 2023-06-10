"use client";
import { ReactNode, createContext, useReducer } from "react";
import { ProductFire, ProductsContext } from "@/types";
import shopingCartReducer from "./shoopingCartReducer";
import { ADD_CART, INCREASE_CART_QUANTITY } from "@/types/index";

interface productProvaiderProps {
    children: ReactNode;
}

export const productsContext = createContext({} as ProductsContext);

const initialState = {
    cartitems: [],
};

const ProductsProvaider = ({ children }: productProvaiderProps) => {
    const [state, dispatch] = useReducer(shopingCartReducer, initialState);

    const addCartProduct = (product: ProductFire) => {
        dispatch({
            type: ADD_CART,
            payload: product,
        });
    };

    return (
        <productsContext.Provider
            value={{
                cartitems: state.cartitems,
                addCartProduct,
            }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsProvaider;
