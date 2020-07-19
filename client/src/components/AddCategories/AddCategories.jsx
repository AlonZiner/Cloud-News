import React, {useState} from "react";
import style from "./AddCategories.module.css"


const AddCategories = (props) => {

    const [category,setCategory] = useState("");

    const saveCat = e => {
        e.preventDefault();
        props.addCategory(category);
    };

    const onChange = e => {
        setCategory(e.target.value);
    };

    return (
        <div className={"container"}>
            <form className={style.form}>
                <div className={"form-group"}>
                    <label htmlFor="category-input">Add Category</label>
                    <input id={"category-input"} onChange={onChange} className={"form-control"} type="text"/>
                </div>
                <div className={style.right}>
                    <input className={"submit"} type="submit" value={"Save"} placeholder={"Save"} onClick={saveCat}/>
                </div>
            </form>

        </div>
    );
};

export default AddCategories