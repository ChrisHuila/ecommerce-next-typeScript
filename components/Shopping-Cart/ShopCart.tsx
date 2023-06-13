"use client";
import { useContext } from "react";
import { productsContext } from "@/context/productsContext";
import ShopCartIcon from "../icons/cart-icon";
import CartMenu from "./CartMenu";

const ShopCart = () => {
    const { cartquantity } = useContext(productsContext);
    return (
        <ul>
            <li className="shopCart">
                <ShopCartIcon />

                {cartquantity > 0 && <div className="shopCart-badge"> {cartquantity} </div>}

                <CartMenu />
            </li>
        </ul>
    );
};

export default ShopCart;
