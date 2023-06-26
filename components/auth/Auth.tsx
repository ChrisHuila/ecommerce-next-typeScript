import Link from 'next/link';

const Auth = () => {
    return (
    <nav>
        <ul className="Auth-container">
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
    </nav>
    );
}
 
export default Auth;