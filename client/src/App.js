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
  const [formView, setFormView] = useState(false);
  const [edit, setEdit] = useState(false);

  const setView = () => setFormView(!formView);

  const closeForm = () => setFormView(false);

  const editItem = item => {
    setEdit(item);
    setFormView(true);
  };

  const clearEdit = () => {
    setEdit(false);
  }

  return (
    <Store.Provider value={{ state, dispatch }}>
        <Router>
          <div className={style.app}>
            <Navbar/>
            <div className={style.body}>
              <Switch>
                <Route path="/news/:id" component={SingleNews}/>
                <Route path="/add-news/" component={AddNews}/>
                <Route path="/add-categories/" component={AddCategories}/>
                <Route path="/" component={Home}/>
              </Switch>
            </div>
          </div>
        </Router>
    </Store.Provider>
  );
}

export default App;
