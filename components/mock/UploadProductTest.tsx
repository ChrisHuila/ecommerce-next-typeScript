"use client";
import { useEffect } from "react";
import firebase from "@/firebase/index";
import { newProducts } from "./fire";

const UploadProductTest = () => {
    // useEffect(() => {
    //     const uploadData = () => {
    //         newProducts.forEach(product => firebase.collect(product, "products"));
    //     };
    //     uploadData();
    // }, []);
    return (
        <>
            <p> upload</p>
        </>
    );
};

export default UploadProductTest;
