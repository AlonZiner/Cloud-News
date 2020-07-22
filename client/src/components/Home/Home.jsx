import React, {useState,useEffect} from "react";
import style from "./Home.module.scss"
import Article from "../Articles/Article";
import {Link} from "react-router-dom";


const Home = (props) => {
    const [articles,setArticles] = useState([]);
    const [search,setSearch] = useState("");
    const [time,setTime] = useState("");

    useEffect(() => {
        var articles = [];
        setArticles([...props.news]);
    },[props.news,props.categories]);

    const filterCategories = e => {
        setSearch(e.target.value);
    };

    const filterTime = e => {
        setTime(e.target.value);
    };

    const filterSearchTime = (article) => {
        if(!time) return true;
        const articleDate = new Date(article.date).toLocaleDateString();
        const otherDate = new Date(time).toLocaleDateString();
        return articleDate === otherDate;
    };

    const filterSearch = (article) => {
        if(!search) return true;
        if(article?.category?.title.toLowerCase().includes(search.toLowerCase())) {
            return  true;
        }
        return  false;
    };

    const getDate = (date) => {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString();
    };

    return (
        <div>
            <h1 className={style.title}>
                Cloud News
            </h1>
            <div className={`form-group ${style.categoryFilterWrapper}`}>
                <label htmlFor="category-filter">Filter By Categories:</label>
                <input id="category-filter" className={"form-control"} type="text" onChange={filterCategories}/>
            </div>
            <div className={`form-group ${style.timeFilter}`}>
                <label htmlFor="time-filter">Filter By Time:</label>
                <input id="time-filter" className={"form-control"} type="date" onChange={filterTime}/>
            </div>
            <ul className={style.grid}>
                {articles.length ? articles.filter((article) => filterSearch(article)).filter( (article) => filterSearchTime(article)).map( (article,index) => {
                    return(
                        <Link key={index} to={{pathname: `/news/${article._id}`, state: {article: article} }} className={style.link}>
                            <li className={style.article} key={index}>
                                <img src={article.imgUrl} alt=""/>
                                <h4>{article.title}</h4>
                                <div className={style.meta}>
                                    <small>{article.author},</small>
                                    <small>{getDate(article.date)}</small>
                                    <br/>
                                    <small>Views: {article.views}</small>
                                    {article.category?.title ? <div className={"label"}>{article.category?.title}</div> : null}
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