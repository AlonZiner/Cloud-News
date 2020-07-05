import React, {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <Link to={"/"}>Home</Link>
            <Link to={"/add-categories/"}>Add Categories</Link>
            <Link to={"/add-news/"}>Add News</Link>
        </header>
    );
};

export default Navbar