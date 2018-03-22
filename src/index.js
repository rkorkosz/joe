import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import "normalize.css";
import Api from 'api';
import Main from 'components/Main';

const articleStore = new Api('article');
const pictureStore = new Api('picture');

ReactDOM.render(
    <Provider articleStore={articleStore} pictureStore={pictureStore}>
        <Main />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
