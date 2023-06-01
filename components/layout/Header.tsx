import ShopCart from "../Shopping-Cart/ShopCart"
import Auth from "../auth/Auth"
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
            <div className="header-auth_div">
              <Auth />
              <ShopCart />
            </div>
          </div>
        </header>
    )
}

export default Header

