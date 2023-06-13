"use client";
import { useContext } from "react";
import { productsContext } from "@/context/productsContext";
import CartItem from "./CartItem";

const CartMenu = () => {
    const { cartitems } = useContext(productsContext);
    return (
        <div className="shopCart-menu">
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th></th>
                    </tr>
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
        </div>
    );
};

export default CartMenu;
