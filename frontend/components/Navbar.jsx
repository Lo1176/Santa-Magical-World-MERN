// import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/addtoy">Add a toy</Link>     
        </nav>
    );
}

export default Navbar;
