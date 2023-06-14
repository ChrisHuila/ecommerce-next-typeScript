"use client";
import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialvalue: T) {
    function getStorage(): T {
        const jsonvalue = localStorage.getItem(key);

        if (jsonvalue != null) {
            return JSON.parse(jsonvalue);
        } else {
            return initialvalue;
        }
    }

    const [value] = useState<T>(getStorage());

    return value;
}
