import SearchIcon from "../icons/Search-icon";

const SearchForm = () => {
    return (
        <form action="" className="search-form">
            <div className="search-box">
                <input 
                type="text"
                placeholder="Search by Article or Category" 
                 />
                 <button type="submit">
                    <SearchIcon />
                 </button>
                 
            </div>
        </form>
      );
}
 
export default SearchForm;