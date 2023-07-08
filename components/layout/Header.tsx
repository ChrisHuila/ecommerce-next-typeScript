"use client"
import { QueryClient, QueryClientProvider } from "react-query";
import ShopCart from "../Shopping-Cart/ShopCart"
import Auth from "../auth/Auth"
import SearchForm from "../search/SearchForm"
import Logo from "./Logo"
import DarkMode from "./DarkMode";

const Header = () => {
    const queryClient = new QueryClient();

    return (
        <header className='header'>
          <div className="container header-layout">
            <Logo />
            <SearchForm />
            <div className="header-auth_div">
                <QueryClientProvider client={queryClient}>
                    <Auth />
                </QueryClientProvider>
                <ShopCart />
                <DarkMode /> 
            </div>
          </div>
        </header>
    )
}

export default Header

