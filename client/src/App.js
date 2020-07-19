import React, { useContext, useReducer, useState } from 'react';
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

const App = () => {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * TODO:
   *  Get news\categories from db when application loads
   */
  const [news,setNews] = useState([]);
  const [categories,setCategories] = useState([]);

  const addCategory = (newCat) => {
      const newCategories = [...categories, newCat];
      setCategories(newCategories);
  };

  const addNews = newNews => {
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
                    <AddCategories addCategory={addCategory}/>
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
