import React from "react";
import { NavLink } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
        <NavLink className="nav-logo" to="/">
            <h1>HRnet</h1>
        </NavLink>
        
    </header>
  );
}
