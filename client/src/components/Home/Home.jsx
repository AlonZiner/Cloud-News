import React, {useState,useEffect} from "react";
import style from "./Home.module.scss"
import Article from "../Articles/Article";
import {Link} from "react-router-dom";


const Home = (props) => {
    const [articles,setArticles] = useState([]);
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        var articles = [];
        setArticles([...props.news]);
        // setArticles(props.news);
        // setCategories(props.categories);
    },[props.news,props.categories]);

    return (
        <div>
            <h1 className={style.title}>
                Cloud News
            </h1>
            <ul className={style.grid}>
                {articles.length ? articles.map( (article,index) => {
                    return(
                        <Link to={{pathname: `/news/${article._id}`, state: {article: article} }} className={style.link}>
                            <li className={style.article} key={index}>
                                <img src={article.imgUrl} alt=""/>
                                <h4>{article.title}</h4>
                                <div className={style.meta}>
                                    <small>{article.author},</small>
                                    <small>{article.date}</small>
                                </div>
                                <div>
                                    {article.desc}
                                </div>
                            </li>
                        </Link>
                    );
                }) : null}
            </ul>

        </div>
    )
};


export default Home