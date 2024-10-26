import {FaFilter} from "react-icons/fa";
import "../components/cssComponents/Filter.css";

const Filter = () =>{
    return(
        <div className="filter-main">
            <button className="filter-btn">
                <FaFilter/>
            </button>
        </div>
    );
}
export default Filter;