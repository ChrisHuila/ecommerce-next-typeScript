"use client";
import { useEffect, useState } from "react";

const useResponsive = () => {
    // window is undefined in the server
    const getWidth = () => {
        if (typeof window !== "undefined") {
            return (
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth
            );
        }
    };

    // set device's width
    const [width, setWidth] = useState(getWidth());

    // device' with listener
    useEffect(() => {
        let timeoutId: any = null;
        const resizeListener = () => {
            clearTimeout(timeoutId);
            // execute the fn getWidth
            timeoutId = setTimeout(() => setWidth(getWidth()), 150);
            // stop execute
        };
        window.addEventListener("resize", resizeListener);
    }, []);

    const numberSwiper = () => {
        if (width) {
            if (width > 1100) {
                return 5;
            } else if (width > 850) {
                return 4;
            } else if (width > 621) {
                return 3;
            } else if (width > 570) {
                return 2;
            } else {
                return 1;
            }
        }
    };

    return { numberSwiper, width };
};

export default useResponsive;
