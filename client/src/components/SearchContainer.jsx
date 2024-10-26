import Filter from "../components/Filter";
import Search from "../components/Search";
import "../components/cssComponents/SearchContainer.css"; // Ensure CSS is linked correctly

const SearchContainer = () => {
  return (
    <div className="search-container-main">
      <div className="product-counter">
        <label htmlFor="counter">
          3 Products Found
        </label>
      </div>
      <div className="search-box">
        <Search />
      </div>
      <div className="filter-box">
        <Filter />
      </div>
    </div>
  );
};

export default SearchContainer;
