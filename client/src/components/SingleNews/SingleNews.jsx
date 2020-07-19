import React, {useState} from "react";
import style from "../Home/Home.module.scss";

const SingleNews = (props) => {
    // get this news part from DB, for now only displaying it via props
    return (
        <div id={"single-news"}>
            <img src={props.location.state.article.imgUrl} alt=""/>
            <h1>{props.location.state.article.title}</h1>
            <div className={style.meta}>
                <small>{props.location.state.article.author},</small>
                <small>{props.location.state.article.date}</small>
            </div>
            <div>
                {props.location.state.article.desc}
            </div>
        </div>
    );
};

export default SingleNews