import React, { useContext, useReducer, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Store from './store/store';
import reducer from './store/reducer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import style from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import SingleNews from "./components/SingleNews/SingleNews";
import AddNews from "./components/AddNews/AddNews";
import AddCategories from "./components/AddCategories/AddCategories";
import Home from "./components/Home/Home";
import categoriesService from "./services/categoriesService";
import newsService from "./services/newsService";

const App = (props) => {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * TODO:
   *  Get news\categories from db when application loads
   */
  const [news,setNews] = useState([]);
  const [categories,setCategories] = useState([]);

  useEffect(async () => {
    const fetchedCategories = await categoriesService.fetchCategories();
    setCategories(fetchedCategories);

    const fetchedNews = await newsService.fetchNews();
    setNews(fetchedNews);
  }, news?.length); // when to rerender?

  const addCategory = async (newCat) => {
      await categoriesService.addCategory({title:newCat});
      const newCategories = [...categories, newCat];
      setCategories(newCategories);
  };

  const addNews = async (newNews) => {
    await newsService.addNews(newNews);
    const newNewsArr = [...news, newNews];
    setNews(newNewsArr);
  };

  return (
    <Store.Provider value={{ state, dispatch }}>
        <Router>
          <div className={style.app}>
            <Navbar/>
            <div className={style.body}>
              <Switch>
                <Route path="/news/:id" component={SingleNews}/>
                <Route path="/add-news/">
                  <AddNews addNews={addNews}/>
                </Route>
                <Route path="/add-categories/">
                    <AddCategories addCategory={addCategory} categories={categories}/>
                </Route>
                <Route path="/">
                  <Home categories={categories} news={news}/>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
    </Store.Provider>
  );
};

export default App;
