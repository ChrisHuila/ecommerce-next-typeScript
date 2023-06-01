import Link from 'next/link';

const Auth = () => {
    return (
    <nav>
        <ul className="Auth-container">
            <li>
                <Link href="/">
                    Sign up
                </Link>
            </li>
            <li>
                <Link href="/">
                    Log in
                </Link>
            </li>
        </ul>
    </nav>
    );
}
 
export default Auth;