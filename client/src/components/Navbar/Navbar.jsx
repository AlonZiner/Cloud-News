import React, {useState} from "react";
import {Link} from "react-router-dom";
import style from "./Navbar.module.scss";

const Navbar = () => {
    const [adminMode,setAdminMode] = useState(false);
    const toggleAdminMode = () => {
      setAdminMode(!adminMode);
    };
    return (
        <div className={style.header}>
            <div className={style.navbar}>
                <Link to={"/"} className={style.nav}>
                    <div className={style.logo}></div>
                </Link>

                { adminMode ? <Link to={"/add-categories/"} className={style.nav}>Add Categories</Link> : null }
                { adminMode ? <Link to={"/add-news/"} className={style.nav}>Add News</Link> : null }

                <button className={"btn"} onClick={toggleAdminMode} className={style.adminButton}>
                    {adminMode ?  "User Mode" : "Admin Mode"}
                </button>

            </div>
        </div>
    );
};

export default Navbar