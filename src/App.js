import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route,Link } from "react-router-dom";
import Login from './componets/Login';
// import Home from './componets/Home';
import Dashboard from'./componets/Dashboard';
import './App.css';
import logo from './componets/logo.webp';
import LogoutButton from './componets/LogoutButton';
import {RiUserSettingsLine} from 'react-icons/ri'




const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    // update current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

     // cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);



  return (
    <header>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      
      <ul className="navbar-nav">
        <div className="navbar-logo">
        <img src={logo} alt="Logo" />
         </div>
        <li className="nav-item2">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item1">
        <div className="current-time"> {currentTime}</div>
        </li>
        </ul>
        <ul className="nav-bar ms=auto mb-2 mb-lg-0 ">
       
        <li className="nav-item3">
        <button className='nav-item3'  onClick={handleDropdownToggle}> <RiUserSettingsLine/>User</button>
            {isDropdownOpen &&
              <ul className="nav-item4">
               <LogoutButton />
              </ul>}
        </li>
      </ul>
      </nav>
   
    <div className="container">
     <Routes>
       
       {/* < Route path="/" element={<Home/>}/> */}
      < Route path="/login" element={<Login/>}/>
      < Route path="/dashboard" element={<Dashboard/>}/>
      < Route path="/logoutbutton" element={<LogoutButton/>}/>
     </Routes>
    </div>
    </header>
   
  );
}

export default App;
// RiUserSettingsLine