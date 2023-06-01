import ShopCart from "../Shopping-Cart/ShopCart"
import SearchForm from "../search/SearchForm"
import Logo from "./Logo"

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <header className='header'>
          <div className="container header-layout">
            <Logo />
            <SearchForm />
            <ShopCart />
          </div>
        </header>
    )
}

export default Header

