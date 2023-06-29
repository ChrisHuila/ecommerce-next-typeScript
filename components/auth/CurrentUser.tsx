import { productsContext } from "@/context/productsContext";
import firebase from "@/firebase/firebase";
import Link from "next/link";
import { useContext } from "react";

const CurrentUser = () => {
    const { user } = useContext(productsContext);
    
    return (
        <nav>
            <ul className="Auth-container">
                <li className="currentUser">
                    <span>hi:</span>  {user?.displayName}
                </li>
                <li>
                    <Link href="/new-product" >
                        <button className="btn-newproduct">Add product</button> 
                    </Link>
                </li>
                <li>
                   <button 
                   className="btn-logout"
                   onClick={() => firebase.logout()
                   }
                   > Log out
                   </button> 
                </li>
            </ul>
        </nav>
    );
}
 
export default CurrentUser;