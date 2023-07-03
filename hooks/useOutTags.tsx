import { useEffect, useState } from "react";

export default function useOutTags(ref: React.RefObject<HTMLUListElement>) {

    const [ showtags, setShowTags ] = useState(false)

    useEffect(() => {

        const handleOutsideClick = (e: MouseEvent)  => {

            if (showtags && ref.current && !ref.current.contains(e.target as Node)) {
                setShowTags(false);
            }
        }

        // Adding click event listener
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);

    }, [ref]);
    
    return{ showtags, setShowTags }
} 