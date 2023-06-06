"use client"
import { ReactNode, createContext, useReducer } from "react";
import { ProductsContext } from "@/types";
import shopingCartReducer from "./shoopingCartReducer";

interface productProvaiderProps {
    children: ReactNode
}

export const productsContext = createContext({} as ProductsContext);

const initialState = {
    shopingcart: []
}

const ProductsProvaider = ({children}:productProvaiderProps) => {
   
   const [state, dispatch] = useReducer(shopingCartReducer, initialState);

    return(
        <productsContext.Provider
            value={{
                shopingcart: state.shopingcart
            }}
        >
            {children}
        </productsContext.Provider>
    )
}

export default ProductsProvaider;