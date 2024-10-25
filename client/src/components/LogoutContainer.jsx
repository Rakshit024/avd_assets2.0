import { FaUserCircle, FaChevronDown,FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import "../components/cssComponents/LogoutContainer.css";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  return (
    <div  className="logout-container-main">

      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {showLogout? <FaChevronDown className="arrow-transform"/> : <FaChevronDown/>}
      </button>
      <div className="show-dropdown">
        <button className="dropdown-btn">
          logout
        </button>
      </div>
    </div>
  );
};
export default LogoutContainer;
