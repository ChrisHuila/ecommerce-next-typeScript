"use client"
import { useEffect, useState } from "react"

export default function useLocalStorage<T>(key: string, inititalState: T | (() => T) ) {
    const [ toggle, setToggle ] = useState<T>(inititalState)


    useEffect(() => {
        const getStorage = () => {
            const jsonvalue = localStorage.getItem(key);

            if(jsonvalue !== null ) {
                setToggle(JSON.parse(jsonvalue));
            }
        }
        getStorage()
    },[setToggle])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(toggle));
        
    },[toggle])

    return [ toggle, setToggle] as [typeof toggle, typeof setToggle]
}