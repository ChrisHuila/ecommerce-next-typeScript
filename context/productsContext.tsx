"use client";
import { ReactNode, createContext, useReducer } from "react";
import { Product, ProductsContext } from "@/types";
import shopingCartReducer from "./shoopingCartReducer";

interface productProvaiderProps {
    children: ReactNode;
}

export const productsContext = createContext({} as ProductsContext);

const initialState = {
    cartitems: [],
    cartquantity: 0,
    notificationadded: false,
    totalprice: 0,
};

const ProductsProvaider = ({ children }: productProvaiderProps) => {
    const [state, dispatch] = useReducer(shopingCartReducer, initialState);

    const addCartProduct = (product: Product) => {
        dispatch({
            type: "ADD_CART",
            payload: product,
        });

        cartQuantity();

        totalPrice();

        notificationAdded(true);

        setTimeout(() => {
            notificationAdded(false);
        }, 3000);
    };

    const removeFromCart = (id: string) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id,
        });
        cartQuantity();

        totalPrice();
    };

    const cartQuantity = () => {
        dispatch({
            type: "CART_QUANTITY",
        });
    };
    const totalPrice = () => {
        dispatch({
            type: "TOTAL_PRICE",
        });
    };
    const notificationAdded = (added: boolean) => {
        dispatch({
            type: "MESSAGE_ADDED",
            payload: added,
        });
    };

    return (
        <productsContext.Provider
            value={{
                cartitems: state.cartitems,
                cartquantity: state.cartquantity,
                notificationadded: state.notificationadded,
                totalprice: state.totalprice,
                addCartProduct,
                removeFromCart,
            }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsProvaider;
