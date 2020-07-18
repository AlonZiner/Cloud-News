import React, {useEffect, useState} from "react";
import style from "./Article.module.scss";


const Article = (props) => {
    debugger;
    return (
        <div className={style.singleArticle}>
            <h4>
                {props.article.title}
            </h4>
            <img src={props.article.img} alt=""/>
            <div>
                {props.article.description}
            </div>
        </div>
    )

}

export default Article;