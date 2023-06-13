"use client";
import { useContext } from "react";
import { productsContext } from "@/context/productsContext";
import ShopCartIcon from "../icons/cart-icon";

const Notification = () => {
    const { notificationadded } = useContext(productsContext);

    if (!notificationadded) return null;

    return <p className="notification-added"> Added {<ShopCartIcon style={{ width: "2rem" }} />}</p>;
};

export default Notification;
