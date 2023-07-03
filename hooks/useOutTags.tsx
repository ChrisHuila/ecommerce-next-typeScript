import { useEffect, useState } from "react";

export default function useOutTags(ref: React.RefObject<HTMLUListElement>) {

    const [ showtags, setShowTags ] = useState(false)

    useEffect(() => {

        const handleOutsideClick = (e: MouseEvent)  => {
            const currentTarget = e.target as Node;

            if (showtags && ref.current && !ref.current.contains(currentTarget)) {
                setShowTags(false);
            }
        }

        // Adding click event listener
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);

    }, [ref]);
    
    return{ showtags, setShowTags }
} 