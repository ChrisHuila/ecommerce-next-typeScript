"use client"
import Link from 'next/link';
import CurrentUser from './CurrentUser';
import useAuth from '@/hooks/useAuth';
import { useContext, useEffect } from 'react';
import { productsContext } from '@/context/productsContext';

const Auth = () => {
   const user = useAuth();

   const { getUser } = useContext(productsContext);

   useEffect(() => {
        getUser(user)

   }, [user])
    
    return (
        <nav>
            {user 
            ? <CurrentUser />
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