"use client";
import { useContext, useEffect } from "react";
import { productsContext } from "@/context/productsContext";
import CartItem from "./CartItem";
import priceFormat from "@/services/priceFormat";
import useCartLocalStorage from "@/hooks/useCartLocalStorage";

const CartMenu = () => {
    const { cartitems, cartquantity, totalprice } = useContext(productsContext);

    useCartLocalStorage("shopping-cart", []);

    return (
        <div className="shopCart-menu">
            {cartquantity === 0 && <p className="shopCart-empty">The shopping cart is empty</p>}
            <table>
                <thead>
                    {cartquantity > 0 && (
                        <tr>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th></th>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {cartitems.map(item => (
                        <CartItem
                            key={item.id}
                            product={item}
                        />
                    ))}
                </tbody>
            </table>
            {totalprice > 0 && <h3 className="shopCart-totalprice">Total: ${priceFormat(totalprice)}</h3>}
        </div>
    );
};

export default CartMenu;
