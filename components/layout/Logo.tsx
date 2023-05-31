import Link from 'next/link';

const Logo = () => {
    return ( 
        <Link href="/">
            <h2 className='header-logo'>
                <span>E</span>Commerce
            </h2>   
        </Link>
    );
}
 
export default Logo;