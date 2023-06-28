import firebase from "@/firebase/firebase";
import { User } from "firebase/auth";

interface Props {
    user: User | null
}

const CurrentUser = ({ user }: Props) => {
    return (
        <nav>
            <ul className="Auth-container">
                <li>
                    hi: {user?.displayName}
                </li>
                <li>
                   <button 
                   className=""
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