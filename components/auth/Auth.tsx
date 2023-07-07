"use client"
import Link from 'next/link';
import CurrentUser from './CurrentUser';
import useAuth from '@/hooks/useAuth';
import firebase from '@/firebase/firebase';
import { useQuery } from 'react-query'
import { Users } from "@/types";
import { useContext, useEffect, useState } from 'react';
import { productsContext } from '@/context/productsContext';

const getuser = async (id: string) => {
    const res = (await firebase.getColletUser(id)) as Array<Users>;
    return res;
};

const Auth = () => {
    const [ userprepared, setUserPrepared ] = useState(false)

   const { user, isresolve } = useAuth();
    
   const { data } = useQuery('currentuser', () =>getuser(user?.uid as string),{enabled: userprepared});

   const { getUser } = useContext(productsContext);

   useEffect(() => {
        if(user){
            setUserPrepared(true)
        }
        if(!data) return

        const currentUser = data[0];

        getUser(currentUser)
   }, [user, data])

    return (
        <nav>
            {user 
             && <CurrentUser 
                firebaseuser={user}
             />
            }
            {!user && isresolve
            &&   <ul className="Auth-container">
                    <li>
                        <Link href="/signup">
                            Sign up
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            Log in
                        </Link>
                    </li>
                </ul>
            }  
            
        </nav>
    );
}
 
export default Auth;