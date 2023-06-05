"use client"
import { ReactNode, createContext, useReducer } from "react";
import firebase from "@/components/firebase/firebase";
import { ProductsContext } from "@/types";
import shoopingCartReducer from "./shoopingCartReducer";

interface productProvaiderProps {
    children: ReactNode
}

export const productsContext = createContext({} as ProductsContext);

const initialState = {
    firebase,
    shoopingcart: []
}

const ProductsProvaider = ({children}:productProvaiderProps) => {

   
   const [state, dispatch] = useReducer(shoopingCartReducer, initialState);

    return(
        <productsContext.Provider
            value={{
                firebase,
                shoopingcart: state.shoopingcart
            }}
        >
            {children}
        </productsContext.Provider>
    )
}

export default ProductsProvaider;