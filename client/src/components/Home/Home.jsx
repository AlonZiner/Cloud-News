import React, {useState,useEffect} from "react";
import style from "./Home.module.scss"
import Article from "../Articles/Article";
import {Link} from "react-router-dom";


const Home = (props) => {
    const [articles,setArticles] = useState([]);
    const [categories,setCategories] = useState([]);

    const createRandomArticle = (i) => {
      const article = {
          author: "Yoni",
          date: "12.12.12",
          title: `Title ${i}`,
          imgUrl: "https://picsum.photos/200/300",
          desc: `description ${i} description ${i} description ${i} description ${i} description ${i} description ${i}`
      };
      return article;
    };

    useEffect(() => {
        var articles = [];
        for (var i = 1 ; i < 20 ; i++){
            const article = createRandomArticle(i);
            articles.push(article);
        }
        setArticles(articles);

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
                        /**
                         * TODO make link
                         */
                        <Link to={{pathname: `/news/${index}`, state: {article: article} }} className={style.nav}>
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