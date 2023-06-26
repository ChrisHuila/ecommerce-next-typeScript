"use client";
import { productsContext } from "@/context/productsContext";
import { useContext, useEffect } from "react";

export default function useCartLocalStorage(key: string, initialvalue: []) {
   const {getLocalStorage} = useContext(productsContext)

    useEffect(() => {
        function getStorage(){
            const jsonvalue = localStorage.getItem(key)
            
            if (jsonvalue != null) {
                getLocalStorage(JSON.parse(jsonvalue))
            } else {
                getLocalStorage(initialvalue )
            }
        }
        getStorage()
       
    }, [])

}
