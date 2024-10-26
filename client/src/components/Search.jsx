import { useState } from "react";
import "../components/cssComponents/Search.css";
import { FaTimes } from "react-icons/fa";

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const handleClear = () => {
        setSearchText('');
    }
  return (
    <div className="search-main">
      <label htmlFor="search">
        Search
      </label>
      <div className="input-container">
        <input type="text" id="search" className="search" placeholder="Search..."
        value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <FaTimes className="filter-icon" onClick={handleClear}
        />
      </div>
    </div>
  );
}

export default Search;
