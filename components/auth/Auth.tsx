"use client"
import Link from 'next/link';
import CurrentUser from './CurrentUser';
import useAuth from '@/hooks/useAuth';
import firebase from '@/firebase/firebase';
import { useQuery } from 'react-query'
import { Users } from "@/types";
import { useContext, useEffect } from 'react';
import { productsContext } from '@/context/productsContext';

const getuser = async (id: string) => {
    const res = (await firebase.getColletUser(id)) as Array<Users>;
    return res;
};

const Auth = () => {
   const user = useAuth();
    
   const { data } = useQuery('currentuser', () =>getuser(user?.uid as string));

   const { getUser } = useContext(productsContext);

   useEffect(() => {
        getUser(user)

   }, [user])
    
    return (
        <nav>
            {user 
            ? <CurrentUser userdata={data} />
            :    <ul className="Auth-container">
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