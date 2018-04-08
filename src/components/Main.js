import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Articles from 'components/Articles';
import Article from 'components/Article';
import Pictures from 'components/Pictures';
import Picture from 'components/Picture';
import Menu from 'components/Menu';

const Main = (props) => {
    const links = [
        {path: '/articles', title: 'Home'},
        {path: '/pictures', title: 'Pictures'},
        {path: '/videos', title: 'Videos'},
    ]
    return (
        <main>
        <Router>
            <div>
                <Menu links={links} />
                <Switch>
                    <Route exact path="/articles" component={Articles}/>
                    <Route path="/articles/:id" component={Article}/>
                    <Route path="/pictures/:id" component={Picture}/>
                    <Route exact path="/pictures" component={Pictures}/>
                </Switch>
            </div>
        </Router>
        </main>
    )
}

export default Main;
