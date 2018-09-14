import React from 'react';
import Login from './Login';
import ArticleList from './ListArticle';
import CreateArticle from './CreateArticle';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

export default class App extends React.Component {

    render() {
        return (
            <Router>

                <Switch>
                    <Route exact path="/list" component={ArticleList} />
                    <Route exact path="/create" component={CreateArticle} />
                    <Route exact path="/login" component={Login} />
                    <Redirect to='/login' />
                </Switch>

            </Router>
        )
    }

}

