"use client";
import { ReactNode, createContext, useReducer } from "react";
import shopingCartReducer from "./shoopingCartReducer";
import { Product, ProductsContext,Users } from "@/types";

interface productProvaiderProps {
    children: ReactNode;
}

export const productsContext = createContext({} as ProductsContext);

const ProductsProvaider = ({ children }: productProvaiderProps) => {


    const initialState = {
        user: null,
        cartitems: [],
        cartquantity: 0,
        notificationadded: false,
        totalprice: 0,
    };

    const [state, dispatch] = useReducer(shopingCartReducer, initialState);

    const getUser = (user: Users) => {
        dispatch({
            type: "GET_USER",
            payload: user,
        })
    }

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

    const getLocalStorage = (storage: Product[]) => {
        dispatch({
            type:"GET_LOCALSTORAGE",
            payload: storage
        })
        cartQuantity();
        totalPrice();
    };

    return (
        <productsContext.Provider
            value={{
                user: state.user,
                cartitems: state.cartitems,
                cartquantity: state.cartquantity,
                notificationadded: state.notificationadded,
                totalprice: state.totalprice,
                getUser,
                addCartProduct,
                removeFromCart,
                getLocalStorage,
            }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsProvaider;
