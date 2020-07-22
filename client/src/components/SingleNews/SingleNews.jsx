import React, {useEffect, useState} from "react";
import style from "../Home/Home.module.scss";
import newsService from "../../services/newsService";

const SingleNews = (props) => {
    // get this news part from DB, for now only displaying it via props
    const [article,setArticle] = useState([]);

    useEffect(() => {
        (async function fetchData(){
            const fetchNews = await newsService.fetchNewsById(props.match.params.id);
            setArticle(fetchNews);
        })();
    }, [props.match.params.id]);

    if(article?.length){
        return (
            <div>
                Loading...
            </div>
        )
    }else {
        return (
            <div id={"single-news"}>
                <img src={article.imgUrl} alt=""/>
                <h1>{article.title}</h1>
                <div className={style.meta}>
                    <small>{article.author},</small>
                    <small>{article.date}</small>
                </div>
                <div>
                    {article.desc}
                </div>
            </div>
        );
    }
};

export default SingleNews