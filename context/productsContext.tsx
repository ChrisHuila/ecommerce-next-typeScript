"use client";
import { ReactNode, createContext, useReducer } from "react";
import { Product, ProductsContext } from "@/types";
import shopingCartReducer from "./shoopingCartReducer";
import useLocalStorage from "@/hooks/useLocalStorage";

interface productProvaiderProps {
    children: ReactNode;
}

export const productsContext = createContext({} as ProductsContext);

const ProductsProvaider = ({ children }: productProvaiderProps) => {
    const value = useLocalStorage("shopping-cart", []);

    const initialState = {
        cartitems: value,
        cartquantity: 0,
        notificationadded: false,
        totalprice: 0,
    };

    const [state, dispatch] = useReducer(shopingCartReducer, initialState);

    const addCartProduct = (product: Product) => {
        dispatch({
            type: "ADD_CART",
            payload: product,
        });
        setLocalStorage();

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

        setLocalStorage();

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
    const setLocalStorage = () => {
        dispatch({
            type: "SET_LOCALSTORAGE",
        });
    };
    const getLocalStorage = () => {
        cartQuantity();
        totalPrice();
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
                getLocalStorage,
            }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsProvaider;
