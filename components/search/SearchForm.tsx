"use client"
import SearchIcon from "../icons/Search-icon";
import useSearch from "@/hooks/useSearch";
import { useRouter } from 'next/navigation'


const SearchForm = () => {
    const router = useRouter()

    const { search, setSearch, error } =  useSearch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value;
        const starSearch = newSearch.trim();

        setSearch(starSearch);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        if(search.trim() === '') return

        router.push(`/search?q=${search}`)
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