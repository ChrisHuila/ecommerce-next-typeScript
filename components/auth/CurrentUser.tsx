import { productsContext } from "@/context/productsContext";
import firebase from "@/firebase/firebase";
import Link from "next/link";
import { useContext } from "react";
import style from "@/components/auth/Auth.module.css"
import AddIcon from "../icons/add-icon";

const CurrentUser = () => {
    const { user } = useContext(productsContext);
    
    return (
        <nav>
            <ul className={style.auth_container}>
                <li className={style.currentUser}>
                    <span>hi:</span>  {user?.displayName}
                </li>
                <li>
                    <Link href="/new-product" >
                        <button className={style.btn_newproduct}>
                            <AddIcon />
                        </button>
                    </Link>
                </li>
                <li>
                   <button 
                   className={style.btn_logout}
                   onClick={() => firebase.logout()
                   }
                   >
                     Exit
                   </button> 
                </li>
            </ul>
        </nav>
    );
}
 
export default CurrentUser;