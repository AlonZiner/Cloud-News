import React, {useState,useEffect} from "react";
import style from "./Home.module.scss"
import Article from "../Articles/Article";


const Home = () => {
    const [articles,setArticles] = useState([])

    const createRandomArticle = (i) => {
      const article = {
          title: `Title ${i}`,
          img: "https://picsum.photos/200/300",
          description: `description ${i} description ${i} description ${i} description ${i} description ${i} description ${i}`
      }
    };
    useEffect(() => {
        var articles = [];
        for (var i = 1 ; i < 20 ; i++){
            const article = createRandomArticle();
            articles.push(article);
        }
        setArticles(articles);
    },[]);

    const displayArticles = () => {
        debugger;
        if(articles.length){
            articles.map( (article,index) => {
                return <Article article={article} key={index}/>
            })
        }
    };
    return (
        <div>
            <h1 className={style.title}>
                Cloud News
            </h1>
            <div className={style.grid}>
                {displayArticles()}
            </div>
        </div>
    )
};


export default Home