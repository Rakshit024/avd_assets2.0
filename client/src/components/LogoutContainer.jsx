import { FaUserCircle, FaChevronDown,FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import "../components/cssComponents/LogoutContainer.css";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const username = "User"
  return (
    <div  className="logout-container-main">
      <button type="button" className="logout-btn" onClick={() => setShowLogout(!showLogout)}>
        <FaUserCircle />
        {username}
        {showLogout? <FaChevronDown className="arrow-transform"/> : <FaChevronDown/>}
      </button>
      <div className={`dropdown ${showLogout && "show-dropdown"}`}>
        <button className="dropdown-btn">
          logout
        </button>
      </div>
    </div>
  );
};
export default LogoutContainer;