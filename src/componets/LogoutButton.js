import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutButton.css';

function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    // Clear user session here
    navigate('/login');
   
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
