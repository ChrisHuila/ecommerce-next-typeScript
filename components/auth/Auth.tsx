"use client"
import Link from 'next/link';
import CurrentUser from './CurrentUser';
import useAuth from '@/hooks/useAuth';

const Auth = () => {
   const user = useAuth();
    
    return (
        <nav>
            {user 
            ? <CurrentUser user= {user}/>
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