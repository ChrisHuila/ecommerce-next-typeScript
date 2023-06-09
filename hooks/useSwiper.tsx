"use client";
import { useEffect, useState } from "react";

const useSwiper = () => {
    const getWidth = () => {
        if (typeof window !== "undefined") {
            return (
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth
            );
        }
    };

    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const resizeListener = () => {
            setTimeout(() => (width === getWidth() ? null : setWidth(getWidth()), 150));
        };

        window.addEventListener("resize", resizeListener);

        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, [width]);

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

    return { numberSwiper };
};

export default useSwiper;
