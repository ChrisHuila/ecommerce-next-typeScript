"use client";
import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialvalue: T) {
    const [value] = useState<T>(() => {
        const jsonvalue = localStorage.getItem(key);

        if (jsonvalue != null) {
            return JSON.parse(jsonvalue);
        } else {
            return initialvalue;
        }
    });

    return value;
}
