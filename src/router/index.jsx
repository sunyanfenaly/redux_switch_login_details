import React, { Component } from 'react';
import { Link,BrowserRouter, Route,Redirect,Switch } from 'react-router-dom';
import Home from '../views/home';
import List from '../views/list';
import Type from '../views/type';
import Login from '../views/login';
import Detailes from '../views/details';

import '../css/base.css';

class IndexRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='wrapper'>
                    <div className='content'>
                        {/* <Route exec path="/" render={() => <Redirect to="/home"  component={Home} />} /> */}
                        <Route exact path="/" component={Home} />
                        <Route path="/list" component={List} />
                        <Route path="/type" component={Type} />
                        <Route path="/login" component={Login} />
                        <Route path="/detailes" component={Detailes} />
                    </div>
                    <div className='footer'>
                        <Link to="/">首页</Link>
                        <Link to="/list">列表</Link>
                        <Link to="/type">类型</Link>
                        <Link to="/login">登录</Link>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default IndexRouter