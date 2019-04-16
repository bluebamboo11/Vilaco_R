import React from 'react';
import ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';
import indexRoutes from './routes/index.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {HashRouter} from 'react-router-dom'


import './assets/scss/style.css';
import './assets/custom.css';
import {createStore} from "redux";
import {todoApp} from "./redux/reducers";
import {Provider} from "react-redux";
import LoadingAll from "./components/Loading/LoadingAll";

//const hist = createBrowserHistory();
export const store = createStore(todoApp);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} key={key} component={prop.component}/>;
                })}
            </Switch>
        </BrowserRouter>
        <LoadingAll/>
    </Provider>
    , document.getElementById('root'));
