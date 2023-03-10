import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="sidebar-icon"></span>
      </button>
      <ul className="sidebar-menu">
        <li>
          <Link to='/'>
            <span className="menu-icon"></span>
            <span className="menu-label">Menu Item 1</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="menu-icon"></span>
            <span className="menu-label">Menu Item 2</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="menu-icon"></span>
            <span className="menu-label">Menu Item 3</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
