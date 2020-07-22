import React, {useState} from "react";
import style from "./AddNews.module.css";
import CategoriesSelect from "./../CategoriesSelect/categoriesSelect";

const AddNews = (props) => {

    const [news,setNews] = useState({});

    const onChange = e => {
        const newNews = {...news};
        newNews[e.target.name] = e.target.value;
        setNews(newNews);
    };

    const onSave = e => {
        e.preventDefault();
        props.addNews(news);
    };

    return (
        <div className={"container"}>
            <form className={style.form}>
                <div className={"form-group"}>
                    <label htmlFor="title">Title</label>
                    <input id={"title"} name={"title"} onChange={onChange} className={"form-control"} type="text"/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="description">Description</label>
                    <input id={"description"} name={"desc"} onChange={onChange} className={"form-control"} type="text"/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="author">Author</label>
                    <input id={"author"} name={"author"} onChange={onChange} className={"form-control"} type="text"/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="date">Date</label>
                    <input id={"date"} name={"date"} onChange={onChange} className={"form-control"} type="date"/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="imgUrl">Image Url</label>
                    <input id={"imgUrl"} name={"imgUrl"} onChange={onChange} className={"form-control"} type="url"/>
                </div>
                <div className={"form-group"}>
                    <label htmlFor="category">Category</label>
                    <CategoriesSelect className={style.select} categories={props.categories}/>
                </div>
                <div className={style.right}>
                    <input className={"submit"} type="submit" value={"Save"} placeholder={"Save"} onClick={onSave}/>
                </div>
            </form>

        </div>
    );

};

export default AddNews