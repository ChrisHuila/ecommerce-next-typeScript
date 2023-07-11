"use client"
import { useState } from "react";
import SearchIcon from "../icons/Search-icon";
import { useRouter } from 'next/navigation'


const SearchForm = () => {
    const router = useRouter()
    
    const [ search, setSearch ] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value;

        setSearch(newSearch);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if(search.trim() === '') return
        const query = search.trim().toLowerCase();

        router.push(`/search?q=${query}`)
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div className="search-box">
                <input 
                type="text"
                placeholder="Search product"
                onChange={handleChange}
                value={search} 
                 />
                 <button type="submit">
                    <SearchIcon />
                 </button>
                 
            </div>
        </form>
      );
}
 
export default SearchForm;