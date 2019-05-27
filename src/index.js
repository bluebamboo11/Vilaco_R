import React from 'react';
import ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';
import indexRoutes from './routes/index.jsx';
import 'react-datetime/css/react-datetime.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {HashRouter} from 'react-router-dom'


import './assets/scss/style.css';
import './assets/custom.css';
import {createStore} from "redux";
import {todoApp} from "./redux/reducers";
import {Provider} from "react-redux";
import LoadingAll from "./components/Loading/LoadingAll";
import ProcessAll from "./components/Loading/ProcessAll";

//const hist = createBrowserHistory();
//file chính chưa tất cả các file khác. điều khiển giao diện
export const store = createStore(todoApp);
ReactDOM.render(
    <Provider store={store}>
       <ProcessAll/>
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
