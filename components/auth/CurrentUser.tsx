import { productsContext } from "@/context/productsContext";
import firebase from "@/firebase/firebase";
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