import { useEffect, useState } from "react";
import style from "@/components/darkmode/Dark.module.css"
import MoonIcon from "../icons/moon-icon";
import SunIcon from "../icons/sun-icon";
import useLocalStorage from "@/hooks/useLocalStorage";

const DarkMode = () => {
    const [ remove, setRemove ] = useState(false)
    const [ toggle, setToggle ] = useLocalStorage('dark-mode', false);

    useEffect(() => {
        if(toggle){
            document.documentElement.classList.add('dark')
        }
        if(!toggle && document.documentElement.classList.contains('dark') && remove){
            document.documentElement.classList.remove('dark')
        }

    },[toggle])
    
    return( 
        <button 
        className={style.btn} 
        onClick={() => {
            setToggle(!toggle)
            setRemove(!remove)
        }}
        >
            {!toggle 
            ? <MoonIcon />
            : <SunIcon />
            }
        </button>
    );
}
 
export default DarkMode;