import firebase from "@/firebase/firebase";
import Link from "next/link";
import { productsContext } from "@/context/productsContext";
import { useContext } from "react";
import AddIcon from "../icons/add-icon";
import style from "@/components/auth/Auth.module.css"
import { User } from "firebase/auth";

interface Props {
    firebaseuser: User
}

const CurrentUser = ({ firebaseuser}: Props) => {
    const { user } = useContext(productsContext);

    const userName = firebaseuser?.displayName?.split(' ')[0];

    return (
        <nav>
            <ul className={`auth_container ${style.auth_container}`}>
                <li className={style.currentUser}>
                    <span>hi: </span>{userName}
                </li>

                {user?.roles?.includes('admin') 
                &&  <li>
                        <Link href="/new-product" >
                            <button className={style.btn_newproduct}>
                                <AddIcon />
                            </button>
                        </Link>
                    </li>
                }
            
                <li>
                    <Link href="/" >
                        <button 
                        className={style.btn_logout}
                        onClick={() => firebase.logout()
                        }
                        >
                            Exit
                        </button>
                    </Link> 
                </li>
            </ul>
        </nav>
    );
}
 
export default CurrentUser;