import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={style.header}>
            <div className={style.navbar}>
                <Link to={"/"} className={style.nav}>
                    <div className={style.logo}></div>
                </Link>
                <Link to={"/add-categories/"} className={style.nav}>Add Categories</Link>
                <Link to={"/add-news/"} className={style.nav}>Add News</Link>
            </div>
        </div>
    );
};

export default Navbar