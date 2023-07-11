"use client";
import { useEffect } from "react";
import firebase from "@/firebase/index";
import { newProducts } from "./fire";

const UploadProductTest = () => {
    const handleProducts = () => {
        newProducts.forEach(product => firebase.collect(product, "products"));
        console.log('finish');
    }
    return (
        <>
            <button onClick={handleProducts}> products</button>
        </>
    );
};

export default UploadProductTest;
