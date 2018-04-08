import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import "normalize.css";
import Api from 'api';
import Main from 'components/Main';

const store = {
    articleStore: new Api('article'),
    pictureStore: new Api('picture')
}

ReactDOM.render(
    <Provider {...store}>
        <Main />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
